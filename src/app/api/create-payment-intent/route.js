import { connectMongo } from "@/lib/connectMongo";
import PurchaseForm from "@/models/PurchaseForm";
import { NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_KEY_TEST);
import sendgrid from "@sendgrid/mail";
import Plot from "@/models/PlotSchema";
import generateNewLeaseNumber from "@/lib/Configuration";

// Set the SendGrid API key
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const prepareAdminEmailMessage = (
  formData,
  newLeaseNumber,
  PaymentIntentId,
  PaymentMethodId,
  PaymentStatus
) => {
  return {
    to: "deepak@securecash.com.au", // Updated to new admin email
    from: `${formData.FullName} <${formData.Email}>`,
    subject: `Purchase of Plot ${formData.PlotNumber}`,
    html: `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Purchase of Plot</title>
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
                      Purchase of Plot
                    </td>
                  </tr>
                  <!-- Content Section -->
                  <tr style="border-top:1px solid #dddddd;">
                    <td colspan="2" style="padding:18px;color:#222222;line-height:160%;text-align:left;">
                      <h1 style="font-size:24px;font-weight:bold;">Purchase of Plot</h1>
                      <p>A website visitor has purchased the following plot:</p>
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
                          <td style="padding:5px 9px;">${formData.Suburb}</td>
                        </tr>
                        <tr>
                          <td style="background-color:#9e8034;color:#ffffff;padding:5px 9px;"><strong>State:</strong></td>
                          <td style="padding:5px 9px;">${formData.State}</td>
                        </tr>
                        <tr>
                          <td style="background-color:#9e8034;color:#ffffff;padding:5px 9px;"><strong>Post Code:</strong></td>
                          <td style="padding:5px 9px;">${formData.PostCode}</td>
                        </tr>
                        <tr>
                          <td style="background-color:#9e8034;color:#ffffff;padding:5px 9px;"><strong>Country:</strong></td>
                          <td style="padding:5px 9px;">${formData.Country}</td>
                        </tr>
                        <tr>
                          <td style="background-color:#9e8034;color:#ffffff;padding:5px 9px;"><strong>Phone Number:</strong></td>
                          <td style="padding:5px 9px;">${formData.MobileNumber}</td>
                        </tr>
                        <tr>
                          <td style="background-color:#9e8034;color:#ffffff;padding:5px 9px;"><strong>Email:</strong></td>
                          <td style="padding:5px 9px;">${formData.Email}</td>
                        </tr>
                       <tr>
                          <td style="background-color:#9e8034;color:#ffffff;padding:5px 9px;"><strong>Lease Number:</strong></td>
                          <td style="padding:5px 9px;">${newLeaseNumber}</td>
                        </tr>
                        <tr>
                          <td style="background-color:#9e8034;color:#ffffff;padding:5px 9px;"><strong>Lease Term:</strong></td>
                          <td style="padding:5px 9px;">${formData.LeaseTerm}</td>
                        </tr>
                        <tr>
                          <td style="background-color:#9e8034;color:#ffffff;padding:5px 9px;"><strong>Expiration:</strong></td>
                          <td style="padding:5px 9px;">${formData.Expiration}</td>
                        </tr>
                       <tr>
                          <td style="background-color:#9e8034;color:#ffffff;padding:5px 9px;"><strong>Amount Paid:</strong></td>
                          <td style="padding:5px 9px;">${formData.Amount}</td>
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
    to: formData.Email, // Customer's email from the form data
    from: "The Cemetery on The Hill <hello@thecemeteryonthehill.com.au>", // Updated sender name and email
    subject: `The Cemetery on The Hill | Thank You For Purchasing Plot ${formData.PlotNumber}`,
    html: `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Thank You For Purchasing Plot ${formData.PlotNumber}</title>
        </head>
        <body style="margin:0;padding:0;font-family:Arial,sans-serif;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td style="padding:12px;">
                <table align="left" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse:collapse;">
                  <!-- Content Section -->
                  <tr style="border-top:1px solid #dddddd;">
                    <td colspan="2" style="padding:18px;color:#222222;line-height:160%;text-align:left;">
                      <p>Hi ${formData.FullName},</p>
                      <p>Thank you very much for your purchase of Plot ${formData.PlotNumber} and trusting us to look after your family legacy!</p>
                      <p>We have received all your lease details and these have been recorded against your plot.</p>
                      <p>We will organise your Interment Rights Certificate and send this to your provided address as soon as possible.</p>
                      <p>In the meantime, if you have any questions or require assistance, please feel free to contact us at <strong>08 8317 6044</strong> or reply directly to this email.</p>
                      <p>Kind regards,<br>The team at The Cemetery on The Hill</p>
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

export async function POST(request) {
  try {
    await connectMongo();

    const formData = await request.json();
    const stripeAmount = Math.round(formData.Amount * 100);

    // Step 1: Create the PaymentIntent with no redirect-based payment methods
    const paymentIntent = await stripe.paymentIntents.create({
      amount: stripeAmount,
      currency: "aud",
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: "never", // Disallow redirect-based payments
      },
    });

    // Step 2: Confirm the PaymentIntent
    const confirmedPaymentIntent = await stripe.paymentIntents.confirm(
      paymentIntent.id,
      {
        payment_method: formData.paymentMethod?.id, // Pass the payment method ID from the frontend
      }
    );

    // Step 3: If payment succeeded, push new lease entry into the LeaseHistory
    if (confirmedPaymentIntent.status === "succeeded") {
         const newLeaseNumber = await generateNewLeaseNumber();

         // Proceed with saving the new plot using the new lease number
         console.log("New Lease Number:", newLeaseNumber);
      
      const newLease = {
        LeaseNumber: newLeaseNumber,
        Amount: formData.Amount,
        PaymentDate: Date.now(),
        LeaseTerm: formData.LeaseTerm,
        Expiration: formData.Expiration,
        FullName: formData.FullName,
        Email: formData.Email,
        MobileNumber: formData.MobileNumber,
        Address: formData.Address,
        Suburb: formData.Suburb,
        State: formData.State,
        PostCode: formData.PostCode,
        Country: formData.Country,
        PaymentDetails: {
          AmountPaid: formData.Amount,
          PaymentIntentId: confirmedPaymentIntent.id,
          PaymentMethodId: confirmedPaymentIntent.payment_method,
          PaymentStatus: confirmedPaymentIntent.status,
        },
      };

      // Use $push to add the new lease entry to LeaseHistory
      const plotUpdate = await Plot.findOneAndUpdate(
        { PlotNumber: formData.PlotNumber }, // Find the plot by PlotNumber
        { $push: { Lease: newLease } }, // Push new lease to Lease
        { new: true, upsert: true } // Create document if it doesn't exist
      );

    

      const emailAdminMessage = prepareAdminEmailMessage(
        formData,
        newLeaseNumber,
        confirmedPaymentIntent.id,
        confirmedPaymentIntent.payment_method || "",
        confirmedPaymentIntent.status || "pending"
      );

      const emailCustomerMessage = prepareCustomerEmailMessage(formData);
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

      return NextResponse.json({
        message: "Lease added successfully to Lease.",
        plot: plotUpdate,
      });
    } else {
      return NextResponse.json({
        error: "Payment failed or is pending.",
      });
    }
  } catch (error) {
    return NextResponse.json({
      error: error.message,
    });
  }
}
