import { NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import sharp from "sharp";
import { connectMongo } from "@/lib/connectMongo"; // Adjust the path as necessary
import ReleaseForm from "@/models/ReleaseForm";

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
  const sanitizedFileName = sanitizeFileName(fileName);

  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: sanitizedFileName,
    Body: fileBuffer,
    ContentType: contentType,
    ACL: "public-read",
  };

  const command = new PutObjectCommand(params);
  await s3Client.send(command);

  const publicUrl = `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_S3_REGION}.amazonaws.com/${sanitizedFileName}`;
  return publicUrl;
}

export async function POST(request) {
  try {
    await connectMongo();

    const formData = await request.formData();
    const file = formData.get("Id");
    const signatureBase64 = formData.get("Signature");

    if (!file && !signatureBase64) {
      return NextResponse.json(
        { error: "File or signature is required." },
        { status: 400 }
      );
    }

    const fileType = file ? file.type : "image/png";
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

    if (file) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const fileName = file.name;

      let optimizedBuffer = buffer;

      if (fileType.startsWith("image/")) {
        optimizedBuffer = await sharp(buffer).jpeg({ quality: 80 }).toBuffer();
      }

      uploadedFileUrl = await uploadFileToS3(
        optimizedBuffer,
        fileName,
        fileType
      );
    }

    if (signatureBase64) {
      const [header, base64Data] = signatureBase64.split(",");
      const contentType = header.match(/:(.*?);/)[1];
      const buffer = Buffer.from(base64Data, "base64");
      const signatureFileName = `Signature_${Date.now()}.png`;

      uploadedSignatureUrl = await uploadFileToS3(
        buffer,
        signatureFileName,
        contentType
      );
    }

    // Extract form data
    const releaseFormData = {};
    formData.forEach((value, key) => {
      if (key !== "Signature" && key !== "Id") {
        releaseFormData[key] = value;
      }
    });

    const releaseForm = new ReleaseForm({
      ...releaseFormData,
      Attachments: {
        Id: uploadedFileUrl,
        Signature: uploadedSignatureUrl,
      },
      Status: "Pending", // Default status
      Created_At: Math.floor(Date.now() / 1000), // Current Unix timestamp
      Updated_At: Math.floor(Date.now() / 1000), // Current Unix timestamp
      Updated_By: "System", // Set appropriate value
    });

    await releaseForm.save();
    return NextResponse.json({
      success: true,
      message: "Form submitted successfully.",
      fileUrl: uploadedFileUrl,
      signatureUrl: uploadedSignatureUrl,
    });
  } catch (error) {
    console.error("Error submitting form:", error);
    return NextResponse.json(
      { error: `Failed to submit the form: ${error}` },
      { status: 500 }
    );
  }
}
