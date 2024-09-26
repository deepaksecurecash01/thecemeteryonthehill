import { connectMongo } from "@/lib/connectMongo";
import PurchaseForm from "@/models/PurchaseForm";
import { NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_KEY_TEST);

export async function POST(request) {
  try {
    await connectMongo();

    const formData = await request.json();
    const stripeAmount = Math.round(formData.Amount * 100);

    console.log(stripeAmount);
    console.log(formData);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: stripeAmount,
      currency: "aud",
      automatic_payment_methods: { enabled: true },
    });

    console.log(paymentIntent);

    const paymentMethodId = paymentIntent.payment_method?.id;

    const paymentMethod = paymentMethodId
      ? await stripe.paymentMethods.retrieve(
          paymentMethodId || formData.paymentMethod?.id
        )
      : formData.paymentMethod || null;
    console.log(paymentMethod);

    const purchaseFormData = { ...formData };
    delete purchaseFormData.paymentMethod;

    const purchaseForm = new PurchaseForm({
      ...purchaseFormData,
      PaymentDetails: {
        AmountPaid: stripeAmount || 0,
        Currency: paymentIntent.currency || "AUD",
        PaymentIntentId: paymentIntent.id,
        PaymentMethodId: paymentMethod?.id || "",
        PaymentMethod: paymentMethod?.card?.brand || "",
        PaymentStatus: paymentIntent.status || "pending",
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
  } catch (error) {
    console.error("Internal Error:", error);
    return NextResponse.json(
      { error: `Internal Server Error: ${error}` },
      { status: 500 }
    );
  }
}
