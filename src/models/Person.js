import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
  BirthDate: { type: String, required: true },
  DeathDate: { type: String },
  BirthPlace: { type: String },
  DeathPlace: { type: String },
  Occupation: { type: String },
  Notes: { type: String },
  Address: { type: String },
  BaptismDate: { type: String },
  BaptismPlace: { type: String },
  Celebrant: { type: String },
  DeathCause: { type: String },
  Gender: { type: String, enum: ["Male", "Female", "Other"] },
  Internment: { type: String },
  InternmentDate: { type: String },
  InternmentNumber: { type: String },
  LeaseNumber: { type: String },
  LeasePayment: { type: String },
  LeaseTerm: { type: String },
  LesseeAddress: { type: String },
  LesseeName: { type: String },
  MaidenName: { type: String },
  Organisation: { type: String },
  Status: { type: String },
});

export default mongoose.models.Grave || mongoose.model("Grave", personSchema);
