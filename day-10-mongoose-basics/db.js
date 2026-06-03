const mongoose = require("mongoose");
require("dotenv").config();

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB connected using Mongoose");
    } catch(error) {
        console.log("MongoDB connection failed", error.message);
    }
}

module.exports = connectDB;