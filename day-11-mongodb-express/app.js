const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
require("dotenv").config();

const chat = require("./models/Chat");

const app = express();
const PORT = process.env.PORT;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true}));
app.use(methodOverride("_method"));
app.use(express.static("public"));

async function connectDB() {
    try {
        mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDb connected successsully");
    } catch(error) {
        console.log("MongoDB connection failed:", error.message);
    }
}

connectDB();

app.get("/", (req, res) => {
    res.redirect("/charts");
})

app.listen(PORT, ()=> {
    console.log(`Server running on ${PORT}`);
})