import mongoose from "mongoose";

const ConfigurationSchema = new mongoose.Schema({
  Name: { type: String, required: true }, // Configuration key name
  Value: { type: String, required: true }, // Configuration value, like the lease number
});

const Configuration =
  mongoose.models.Configuration ||
  mongoose.model("Configuration", ConfigurationSchema);
export default Configuration;
