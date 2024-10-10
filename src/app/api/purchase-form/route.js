// src/app/api/purchase-form/route.js
import { NextResponse } from "next/server";
import { connectMongo } from "@/lib/connectMongo"; // Adjust the path as necessary
import PurchaseForm from "@/models/PurchaseForm"; // Import the Mongoose model for PurchaseForm
import { convertToSubcurrency } from "@/lib/helper";
const stripe = require("stripe")(process.env.STRIPE_KEY_TEST); // Initialize Stripe
import sendgrid from "@sendgrid/mail";

// Set the SendGrid API key
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const prepareAdminEmailMessage = (
  formData,
  AmountPaid,
  Currency,
  PaymentIntentId,
  PaymentMethodId,
  PaymentMethod,
  PaymentStatus
) => {
  console.log("Form Data: ", formData);
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
                          <td style="background-color:#9e8034;color:#ffffff;padding:5px 9px;width:160px;"><strong>Plot Number:</strong></td>
                          <td style="padding:5px 9px;">${formData.PlotNumber}</td>
                        </tr>
                        <tr>
                          <td style="background-color:#9e8034;color:#ffffff;padding:5px 9px;"><strong>Full Name:</strong></td>
                          <td style="padding:5px 9px;">${formData.FullName}</td>
                        </tr>
                        <tr>
                          <td style="background-color:#9e8034;color:#ffffff;padding:5px 9px;"><strong>Address:</strong></td>
                          <td style="padding:5px 9px;">${formData.Address}</td>
                        </tr>
                        <tr>
                          <td style="background-color:#9e8034;color:#ffffff;padding:5px 9px;"><strong>Suburb:</strong></td>
                          <td style="padding:5px 9px;">${formData.City}</td>
                        </tr>
                        <tr>
                          <td style="background-color:#9e8034;color:#ffffff;padding:5px 9px;"><strong>State:</strong></td>
                          <td style="padding:5px 9px;">${formData.State}</td>
                        </tr>
                        <tr>
                          <td style="background-color:#9e8034;color:#ffffff;padding:5px 9px;"><strong>Post Code:</strong></td>
                          <td style="padding:5px 9px;">${formData.PostalCode}</td>
                        </tr>
                        <tr>
                          <td style="background-color:#9e8034;color:#ffffff;padding:5px 9px;"><strong>Country:</strong></td>
                          <td style="padding:5px 9px;">${formData.Country}</td>
                        </tr>
                        <tr>
                          <td style="background-color:#9e8034;color:#ffffff;padding:5px 9px;"><strong>Phone Number:</strong></td>
                          <td style="padding:5px 9px;">${formData.PhoneNumber}</td>
                        </tr>
                        <tr>
                          <td style="background-color:#9e8034;color:#ffffff;padding:5px 9px;"><strong>Email:</strong></td>
                          <td style="padding:5px 9px;">${formData.Email}</td>
                        </tr>
                        <tr>
                          <td style="background-color:#9e8034;color:#ffffff;padding:5px 9px;"><strong>Amount Paid:</strong></td>
                          <td style="padding:5px 9px;">${AmountPaid} ${Currency}</td>
                        </tr>
                        <tr>
                          <td style="background-color:#9e8034;color:#ffffff;padding:5px 9px;"><strong>Payment Intent ID:</strong></td>
                          <td style="padding:5px 9px;">${PaymentIntentId}</td>
                        </tr>
                        <tr>
                          <td style="background-color:#9e8034;color:#ffffff;padding:5px 9px;"><strong>Payment Method ID:</strong></td>
                          <td style="padding:5px 9px;">${PaymentMethodId}</td>
                        </tr>
                        <tr>
                          <td style="background-color:#9e8034;color:#ffffff;padding:5px 9px;"><strong>Payment Method:</strong></td>
                          <td style="padding:5px 9px;">${PaymentMethod}</td>
                        </tr>
                        <tr>
                          <td style="background-color:#9e8034;color:#ffffff;padding:5px 9px;"><strong>Payment Status:</strong></td>
                          <td style="padding:5px 9px;">${PaymentStatus}</td>
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

export async function POST(req) {
  try {
    // Connect to MongoDB
    await connectMongo();
    const formData = await req.json();
    const stripeAmount = convertToSubcurrency(formData.Amount);


    // Create a Stripe Payment Intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: stripeAmount,
      currency: "aud",
      automatic_payment_methods: { enabled: true },
    });
    // Retrieve the Payment Method details
    const paymentMethodId = paymentIntent.payment_method;

    // Retrieve payment method details if available
    const paymentMethod = paymentMethodId
      ? await stripe.paymentMethods.retrieve(paymentMethodId)
      : null;

    const paymentMethodBrand = paymentMethod?.card?.brand || "unknown";

    // Extract form data excluding payment details
    const purchaseFormData = { ...formData };

    // Save the form data to MongoDB
    const purchaseForm = new PurchaseForm({
      ...purchaseFormData,
      PaymentDetails: {
        AmountPaid: stripeAmount || 0,
        Currency: paymentIntent.currency || "aud", // Retrieve currency from PaymentIntent
        PaymentIntentId: paymentIntent.id,
        PaymentMethodId: paymentMethodId || "", // Retrieve PaymentMethodId from PaymentIntent
        PaymentMethod: paymentMethodBrand, // Retrieve PaymentMethod brand if available
        PaymentStatus: paymentIntent.status || "pending",
      },
      Created_At: Math.floor(Date.now() / 1000), // Current Unix timestamp
      Updated_At: Math.floor(Date.now() / 1000), // Current Unix timestamp
      Updated_By: "System", // Set appropriate value
    });


    await purchaseForm.save();

    // Send Emails
    const emailAdminMessage = prepareAdminEmailMessage(
      purchaseFormData,
      stripeAmount || 0,
      paymentIntent.currency || "aud",
      paymentIntent.id,
      paymentMethodId || "",
      paymentMethodBrand,
      paymentIntent.status || "pending"
    );

    const emailCustomerMessage = prepareCustomerEmailMessage(purchaseFormData);
    try {
      await sendgrid.send(emailAdminMessage);
    } catch (error) {
      console.error("SendGrid Admin Email Error: ", error.response.body);
    }

    try {
      await sendgrid.send(emailCustomerMessage);
    } catch (error) {
      console.error("SendGrid Customer Email Error: ", error.response.body);
    }
    // Return the client secret for the payment intent
    return NextResponse.json({
      success: true,
      message: "Form submitted and payment intent created successfully.",
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Internal Error:", error);
    return NextResponse.json(
      { error: `Internal Server Error: ${error.message}` },
      { status: 500 }
    );
  }
}
