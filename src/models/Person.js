import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
  BirthDate: { type: Date, required: true },
  DeathDate: { type: Date },
  BirthPlace: { type: String },
  DeathPlace: { type: String },
  Occupation: { type: String },
  Notes: { type: String },
  Address: { type: String },
  BaptismDate: { type: Date },
  BaptismPlace: { type: String },
  Celebrant: { type: String },
  DeathCause: { type: String },
  Gender: { type: String, enum: ["Male", "Female", "Other"] },
  Internment: { type: String },
  InternmentDate: { type: Date },
  InternmentNumber: { type: String },
  LeaseNumber: { type: String },
  LeasePayment: { type: Number },
  LeaseTerm: { type: Number },
  LesseeAddress: { type: String },
  LesseeName: { type: String },
  MaidenName: { type: String },
  Organisation: { type: String },
  Status: { type: String },
});

export default mongoose.models.Grave || mongoose.model("Grave", personSchema);
