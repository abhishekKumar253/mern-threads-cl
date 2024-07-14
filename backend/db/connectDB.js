import { config } from "./config.js";
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(config.databaseUrl);
    console.log(`MongoDB connected !! DB HOST : ${connectionInstance}`);
  } catch (error) {
    console.log("MongoDB connection Failed", error);
    process.exit(1);
  }
};
