// infrastructure/mongodb/mongoClient.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  }
};

export const disconnectMongo = async () => {
  try {
    await mongoose.disconnect();
    console.log('✅ MongoDB disconnected');
  } catch (err) {
    console.error('❌ MongoDB disconnection error:', err);
    process.exit(1);
  }
};