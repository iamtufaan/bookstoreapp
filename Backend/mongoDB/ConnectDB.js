import mongoose from "mongoose";

const ConnectMD = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB!");
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit the process on failure
  }
};

export default ConnectMD;
