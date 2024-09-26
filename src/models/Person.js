import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  birthDate: { type: Date, required: true },
  deathDate: { type: Date },
  birthPlace: { type: String },
  deathPlace: { type: String },
  occupation: { type: String },
  notes: { type: String },
  address: { type: String },
  baptismDate: { type: Date },
  baptismPlace: { type: String },
  celebrant: { type: String },
  deathCause: { type: String },
  gender: { type: String, enum: ["Male", "Female", "Other"] },
  internment: { type: String },
  internmentDate: { type: Date },
  internmentNumber: { type: String },
  leaseNumber: { type: String },
  leasePayment: { type: Number },
  leaseTerm: { type: Number },
  lesseeAddress: { type: String },
  lesseeName: { type: String },
  maidenName: { type: String },
  organisation: { type: String },
  status: { type: String },
});

export default mongoose.models.Person || mongoose.model("Person", personSchema);
