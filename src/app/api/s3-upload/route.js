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

async function uploadFileToS3(fileBuffer, fileName, contentType) {
  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: fileName,
    Body: fileBuffer,
    ContentType: contentType,
  };

  const command = new PutObjectCommand(params);
  await s3Client.send(command);

  // Return the URL of the uploaded file
  return `${process.env.AWS_S3_BASE_PATH}/${fileName}`;
}

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "File is required." }, { status: 400 });
    }

    const fileType = file.type;
    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/jpg",
      "application/pdf",
    ];

    // Check if the file type is allowed
    if (!allowedTypes.includes(fileType)) {
      return NextResponse.json(
        { error: "Invalid file type." },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = file.name;

    // Optimize images using Sharp
    let optimizedBuffer = buffer;

    if (fileType.startsWith("image/")) {
      optimizedBuffer = await sharp(buffer)
        .jpeg({ quality: 80 }) // Adjust quality as needed
        .toBuffer();
    }

    // Upload the file to S3
    const uploadedFileUrl = await uploadFileToS3(
      optimizedBuffer,
      fileName,
      fileType
    );

    return NextResponse.json({ success: true, fileName, url: uploadedFileUrl });
  } catch (error) {
    console.error("Error uploading file:", error);
    return NextResponse.json(
      { error: "Failed to upload file." },
      { status: 500 }
    );
  }
}
