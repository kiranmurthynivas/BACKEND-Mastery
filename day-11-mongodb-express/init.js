const mongoose = require("mongoose");
require("dotenv").config();

const Chat = require("./models/Chat");

async function main() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB connected");

        await Chat.deleteMany({});

        await Chat.insertMany([
            {
                from: "Kiran",
                to: "Rahul",
                message: "Hey, I am learning MongoDB with Express."
            },
            {
                from: "Rahul",
                to: "Kiran",
                message: "Great! Keep building projects."
            },
            {
                from: "Sneha",
                to: "Kiran",
                message: "Did you complete the backend chapter?"
            },
            {
                from: "Kiran",
                to: "Sneha",
                message: "Yes, now I am building a Chat CRUD app."
            }
        ]);

        console.log("Sample chats inserted");
        await mongoose.connection.close();
    } catch (error) {
        console.log("Error:", error.message);
        await mongoose.connection.close();
    }
}

main();