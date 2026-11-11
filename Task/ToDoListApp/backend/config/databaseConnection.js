const mongoose = require("mongoose");

async function DbConnection() {
  try {
    const DB_URL = process.env.MONGO_URI;

    // Check MongoDB URI
    if (!DB_URL) {
      throw new Error("MONGO_URI is missing in environment variables");
    }

    // Connect to MongoDB
    await mongoose.connect(DB_URL);

    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);

    process.exit(1);
  }
}

module.exports = DbConnection;
