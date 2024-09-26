import { NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import sharp from "sharp";

const s3Client = new S3Client({
  region: process.env.AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
  },
});

// Function to sanitize file names
function sanitizeFileName(fileName) {
  return fileName
    .trim()
    .replace(/\s+/g, "_") // Replace spaces with underscores
    .replace(/[^\w\-.]/g, ""); // Remove special characters except alphanumeric, underscore, dash, and dot
}

async function uploadFileToS3(fileBuffer, fileName, contentType) {
  // Sanitize the file name once
  const sanitizedFileName = sanitizeFileName(fileName);

  // Log the sanitized file name to debug
  console.log("Sanitized File Name:", sanitizedFileName);

  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: sanitizedFileName, // Ensure this is not repeated
    Body: fileBuffer,
    ContentType: contentType,
    ACL: "public-read", // Ensure the file is publicly readable
  };

  const command = new PutObjectCommand(params);
  await s3Client.send(command);

  // Construct the public URL once, without appending the file name multiple times
  const publicUrl = `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_S3_REGION}.amazonaws.com/${sanitizedFileName}`;
  return publicUrl;
}

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");
    const signatureBase64 = formData.get("signature"); // Get the base64 signature

    if (!file && !signatureBase64) {
      return NextResponse.json(
        { error: "File or signature is required." },
        { status: 400 }
      );
    }

    const fileType = file ? file.type : "image/png"; // Default to image/png if no file
    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/jpg",
      "application/pdf",
    ];

    if (file && !allowedTypes.includes(fileType)) {
      return NextResponse.json(
        { error: "Invalid file type." },
        { status: 400 }
      );
    }

    let uploadedFileUrl = null;
    let uploadedSignatureUrl = null;

    // Handle file upload
    if (file) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const fileName = file.name;

      // Optimize images using Sharp (only for image types)
      let optimizedBuffer = buffer;

      if (fileType.startsWith("image/")) {
        optimizedBuffer = await sharp(buffer)
          .jpeg({ quality: 80 }) // Adjust image quality as needed
          .toBuffer();
      }

      // Upload the file to S3 and get the public URL
      uploadedFileUrl = await uploadFileToS3(
        optimizedBuffer,
        fileName,
        fileType
      );
    }

    // Handle base64 signature upload
    if (signatureBase64) {
      const [header, base64Data] = signatureBase64.split(",");
      const contentType = header.match(/:(.*?);/)[1]; // Extract content type from the header
      const buffer = Buffer.from(base64Data, "base64");
      const signatureFileName = `signature_${Date.now()}.png`; // Generate a unique name for the signature

      uploadedSignatureUrl = await uploadFileToS3(
        buffer,
        signatureFileName,
        contentType
      );
    }

    return NextResponse.json({
      success: true,
      fileUrl: uploadedFileUrl,
      signatureUrl: uploadedSignatureUrl,
    });
  } catch (error) {
    console.error("Error uploading file:", error);
    return NextResponse.json(
      { error: "Failed to upload file." },
      { status: 500 }
    );
  }
}
