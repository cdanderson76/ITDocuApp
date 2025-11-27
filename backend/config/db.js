import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

export default async function connectDB() {

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Successfully connected to MongoDB database at ${conn.connection.host}`);

  } catch(error) {
    console.log(`Server error: ${error.message}`);
    process.exit(1);
  }
};