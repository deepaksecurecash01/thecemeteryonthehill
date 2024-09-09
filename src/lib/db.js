import mongoose from "mongoose";

export const db = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "edockets",
    });
    console.log("Connected to Mongoose");
  } catch (error) {
    console.log("Failed to connect to Mongoose");
    console.log(error);
  }
};
