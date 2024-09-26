// src/app/api/purchase-form/route.js
import { NextResponse } from "next/server";
import { connectMongo } from "@/lib/connectMongo"; // Adjust the path as necessary
import PurchaseForm from "@/models/PurchaseForm"; // Import the Mongoose model for PurchaseForm
import { convertToSubcurrency } from "@/lib/helper";
const stripe = require("stripe")(process.env.STRIPE_KEY_TEST); // Initialize Stripe

export async function POST(req) {
  try {
    // Connect to MongoDB
    await connectMongo();
    const formData = await req.json();
  const stripeAmount = convertToSubcurrency(formData.Amount);

    console.log(formData);

    // Create a Stripe Payment Intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: stripeAmount,
      currency: "aud",
      automatic_payment_methods: { enabled: true },
    });
    console.log(paymentIntent);
    // Retrieve the Payment Method details
    const paymentMethodId = paymentIntent.payment_method;

    const paymentMethod = paymentMethodId
      ? await stripe.paymentMethods.retrieve(paymentMethodId)
      : null;

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
        PaymentMethod: paymentMethod?.card?.brand || "", // Retrieve PaymentMethod brand if available
        PaymentStatus: paymentIntent.status || "pending",
      },
      Created_At: Math.floor(Date.now() / 1000), // Current Unix timestamp
      Updated_At: Math.floor(Date.now() / 1000), // Current Unix timestamp
      Updated_By: "System", // Set appropriate value
    });
    console.log(purchaseForm);
    await purchaseForm.save();

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
