import { connectMongo } from "@/lib/connectMongo";
import PurchaseForm from "@/models/PurchaseForm";
import { NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_KEY_TEST);

export async function POST(request) {
  try {
        await connectMongo();

    const formData = await request.json();
    const stripeAmount = Math.round(formData.Amount * 100);

    console.log("Form Data:", formData);
    console.log("Amount to Charge (in cents):", stripeAmount);

    // Step 1: Create the PaymentIntent with no redirect-based payment methods
    const paymentIntent = await stripe.paymentIntents.create({
      amount: stripeAmount,
      currency: "aud",
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: "never", // Disallow redirect-based payments
      },
    });

    console.log("Payment Intent Created:", paymentIntent);

    // Step 2: Confirm the PaymentIntent
    const confirmedPaymentIntent = await stripe.paymentIntents.confirm(
      paymentIntent.id,
      {
        payment_method: formData.paymentMethod?.id, // Pass the payment method ID from the frontend
      }
    );

    console.log("Payment Intent Confirmed:", confirmedPaymentIntent);

    // Step 3: Capture the PaymentIntent
    if (confirmedPaymentIntent.status === "succeeded") {
      const purchaseFormData = { ...formData };
      delete purchaseFormData.paymentMethod;

      const purchaseForm = new PurchaseForm({
        ...purchaseFormData,
        PaymentDetails: {
          AmountPaid: confirmedPaymentIntent.amount || 0,
          Currency: confirmedPaymentIntent.currency || "AUD",
          PaymentIntentId: confirmedPaymentIntent.id,
          PaymentMethodId: confirmedPaymentIntent.payment_method || "",
          PaymentStatus: confirmedPaymentIntent.status || "pending",
        },
        Created_At: Math.floor(Date.now() / 1000),
        Updated_At: Math.floor(Date.now() / 1000),
        Updated_By: "System",
      });
      console.log(purchaseForm);
      await purchaseForm.save();

      return NextResponse.json({
        success: true,
        message: "Form submitted and payment intent created successfully.",
        clientSecret: paymentIntent.client_secret,
      });
    } else {
      return NextResponse.json(
        { error: "Payment Intent is not ready for capture" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Internal Error:", error);
    return NextResponse.json(
      { error: `Internal Server Error: ${error.message}` },
      { status: 500 }
    );
  }
}
