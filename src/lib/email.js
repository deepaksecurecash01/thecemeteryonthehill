import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

    
export async function sendEmail({ to, from, subject, message }) {
  const msg = {
    to,
    from,
    subject,
    text: message,
  };

  try {
    await sgMail.send(msg);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}