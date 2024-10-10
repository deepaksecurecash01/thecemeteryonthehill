import { NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import sharp from "sharp";
import { connectMongo } from "@/lib/connectMongo"; // Adjust the path as necessary
import ReleaseForm from "@/models/ReleaseForm";
import sendgrid from "@sendgrid/mail";

// Set the SendGrid API key
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const prepareAdminEmailMessage = (
  formData,
  uploadedFileUrl,
  uploadedSignatureUrl
) => {
  return {
    to: "deepak@securecash.com.au", // Replace with your receiving email
    from: `${formData.FullName} <${formData.Email}>`, // Updated sender name and email
    subject: `New Renew Form Submission from ${formData.FullName}`,
    html: `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Renew Form Submission</title>
        </head>
        <body style="margin:0;padding:0;font-family:Arial,sans-serif;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td style="padding:12px;">
                <table align="left" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse:collapse;">
                  <!-- Header Section -->
                  <tr>
                    <td style="padding:0 0 12px 0;">
                      <img src="https://thecemeteryonthehill.vercel.app/_next/image?url=%2Fimages%2Flogo.png&w=640&q=75" alt="The Cemetery on The Hill Logo" width="200" height="60" />
                    </td>
                    <td valign="middle" style="color:#bbbbbb;text-align:center;font-size:15px;">
                      Renew Form Submission
                    </td>
                  </tr>
                  <!-- Content Section -->
                  <tr style="border-top:1px solid #dddddd;">
                    <td colspan="2" style="padding:18px;color:#222222;line-height:160%;text-align:left;">
                      <h1 style="font-size:24px;font-weight:bold;">Renew Form Submission</h1>
                      <p>A website visitor submitted the following details through the Renew Form of The Cemetery on the Hill:</p>
                      <table>
                        <tr>
                          <td style="background-color:#9e8034;color:#ffffff;padding:5px 9px;width:160px;"><strong>Full Name:</strong></td>
                          <td style="padding:5px 9px;">${formData.FullName}</td>
                        </tr>
                                                <tr>
                          <td style="background-color:#9e8034;color:#ffffff;padding:5px 9px;"><strong>Full Name of Deceased:</strong></td>
                          <td style="padding:5px 9px;">${formData.NameOfDeceased}</td>
                        </tr>
                        <tr>
                          <td style="background-color:#9e8034;color:#ffffff;padding:5px 9px;"><strong>Email:</strong></td>
                          <td style="padding:5px 9px;">${formData.Email}</td>
                        </tr>
                       

                         <tr>
                          <td style="background-color:#9e8034;color:#ffffff;padding:5px 9px;width:160px;"><strong>Date of Birth:</strong></td>
                          <td style="padding:5px 9px;">${formData.DateOfBirth}</td>
                        </tr>
                        <tr>
                          <td style="background-color:#9e8034;color:#ffffff;padding:5px 9px;"><strong>Date of Death:</strong></td>
                          <td style="padding:5px 9px;">${formData.DateOfDeath}</td>
                        </tr>
                        <tr>
                          <td style="background-color:#9e8034;color:#ffffff;padding:5px 9px;"><strong>Plot Number:</strong></td>
                          <td style="padding:5px 9px;">${formData.PlotNumber}</td>
                        </tr>
                      
                           <tr>
                          <td style="background-color:#9e8034;color:#ffffff;padding:5px 9px;"><strong>Internment Type:</strong></td>
                          <td style="padding:5px 9px;">${formData.InternmentType}</td>
                        </tr>
                       <tr>
  <td style="background-color:#9e8034;color:#ffffff;padding:5px 9px;">
    <strong>Signature:</strong>
  </td>
  <td style="padding:5px 9px;">
    <img src="${uploadedSignatureUrl}" alt="Signature" />
  </td>
</tr>
<tr>
  <td style="background-color:#9e8034;color:#ffffff;padding:5px 9px;">
    <strong>ID:</strong>
  </td>
  <td style="padding:5px 9px;">
    <img src="${uploadedFileUrl}" alt="ID" />
  </td>
</tr>

                      </table>
                    </td>
                  </tr>
                  <!-- Footer Section -->
                  <tr>
                    <td colspan="2" style="border-top:1px solid #dddddd;">
                      <table align="left" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                        <tr>
                          <td width="160" style="padding:12px;color:#222222;text-align:center;">
                            <img src="https://thecemeteryonthehill.vercel.app/_next/image?url=%2Fimages%2Flogo-full.png&w=640&q=75" width="160" alt="The Cemetery on The Hill Logo" />
                          </td>
                          <td style="padding:12px;color:#222222;text-align:left;">
                            <table style="border-collapse:collapse;">
                              <tr>
                                <td width="30"><img src="https://service.securecash.com.au/branded/email.png" alt="Email" /></td>
                                <td>hello@thecemeteryonthehill.com.au</td>
                              </tr>
                              <tr>
                                <td width="30"><img src="https://service.securecash.com.au/branded/phone.png" alt="Phone" /></td>
                                <td>08 8317 6044</td>
                              </tr>
                              <tr>
                                <td width="30"><img src="https://service.securecash.com.au/branded/website.png" alt="Website" /></td>
                                <td><a href="https://thecemeteryonthehill.com.au/" target="_blank">thecemeteryonthehill.com.au</a></td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <!-- Disclaimer Section -->
                  <tr>
                    <td colspan="2" style="text-align:center;color:#666666;padding:12px;border-top:1px solid #dddddd;">
                      &copy; 2024 THE CEMETERY ON THE HILL PRESERVATION SOCIETY LIMITED ABN 33672485442 - Trading as "The Cemetery on The Hill"
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `,
  };
};

const prepareCustomerEmailMessage = (formData) => {
  return {
    to: formData.Email, // Replace with your receiving email
    from: "The Cemetery on The Hill <hello@thecemeteryonthehill.com.au>", // Updated sender name and email
    subject: `${formData.PlotNumber} Renewal | The Cemetery on The Hill`,
    html: `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Thank You for Your Inquiry</title>
        </head>
        <body style="margin:0;padding:0;font-family:Arial,sans-serif;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td style="padding:12px;">
                <table align="left" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse:collapse;">
                  <!-- Header Section -->
                  <tr>
                    <td style="padding:0 0 12px 0;">
                      <img src="https://thecemeteryonthehill.vercel.app/_next/image?url=%2Fimages%2Flogo.png&w=640&q=75" alt="The Cemetery on The Hill Logo" width="200" height="60" />
                    </td>
                    <td valign="middle" style="color:#bbbbbb;text-align:center;font-size:15px;">
                      Renew Form Submission
                    </td>
                  </tr>
                  <!-- Content Section -->
                  <tr style="border-top:1px solid #dddddd;">
                    <td colspan="2" style="padding:18px;color:#222222;line-height:160%;text-align:left;">
                      <p">Hi ${formData.FullName},</p>
                      <p>Thank you for submitting your renewal for Plot ${formData.PlotNumber}.</p>
                      <p>We have received your message and will be in touch with you shortly for the next steps.</p>
                      <p>In the meantime, if you have any urgent questions or require immediate assistance, please feel free to contact us at <strong>08 8317 6044</strong> or reply directly to this email.</p>
                      <p>Kind regards, <br/>
                      The team at The Cemetery on The Hill
                      </p>
                    </td>
                  </tr>
                  <!-- Footer Section -->
                  <tr>
                    <td colspan="2" style="border-top:1px solid #dddddd;">
                      <table align="left" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                        <tr>
                          <td width="160" style="padding:12px;color:#222222;text-align:center;">
                            <img src="https://thecemeteryonthehill.vercel.app/_next/image?url=%2Fimages%2Flogo-full.png&w=640&q=75" width="160" alt="The Cemetery on The Hill Logo" />
                          </td>
                          <td style="padding:12px;color:#222222;text-align:left;">
                            <table style="border-collapse:collapse;">
                              <tr>
                                <td width="30"><img src="https://service.securecash.com.au/branded/email.png" alt="Email" /></td>
                                <td><a href="mailto:hello@thecemeteryonthehill.com.au">hello@thecemeteryonthehill.com.au</a></td>
                              </tr>
                              <tr>
                                <td width="30"><img src="https://service.securecash.com.au/branded/phone.png" alt="Phone" /></td>
                                <td>08 8317 6044</td>
                              </tr>
                              <tr>
                                <td width="30"><img src="https://service.securecash.com.au/branded/website.png" alt="Website" /></td>
                                <td><a href="https://thecemeteryonthehill.com.au/" target="_blank">thecemeteryonthehill.com.au</a></td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <!-- Disclaimer Section -->
                  <tr>
                    <td colspan="2" style="text-align:center;color:#666666;padding:12px;border-top:1px solid #dddddd;">
                      &copy; 2024 THE CEMETERY ON THE HILL PRESERVATION SOCIETY LIMITED ABN 33672485442 - Trading as "The Cemetery on The Hill"

                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `,
  };
};

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
    const emailAdminMessage = prepareAdminEmailMessage(
      formData,
      uploadedSignatureUrl,
      uploadedFileUrl
    );
    const emailCustomerMessage = prepareCustomerEmailMessage(formData);
    await sendgrid.send(emailAdminMessage);

    await sendgrid.send(emailCustomerMessage);
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
