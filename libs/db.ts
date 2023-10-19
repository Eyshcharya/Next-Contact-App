import mongoose from "mongoose";

const connectDB = async () => {
  const collection = process.env.MONGO_URI;
  if (collection) {
    try {
      mongoose.connect(collection);
      console.log(`MongoDB Connected`);
    } catch (error) {
      console.log(`Error: ${error}`);
      process.exit(1);
    }
  } else {
    console.log("MONGO_URI environment variable is not defined");
    process.exit(1);
  }
};
export default connectDB;
