const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
require("dotenv").config();

const Chat = require("./models/Chat");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("MongoDB connection failed:", error.message);
    }
}

connectDB();

app.get("/", (req, res) => {
    res.redirect("/chats");
});

app.get("/chats", async (req, res) => {
    try {
        const chats = await Chat.find();
        res.render("index", { chats });
    } catch (error) {
        res.status(500).send("Something went wrong");
    }
});

app.get("/chats/new", (req, res) => {
  res.render("new");
});

app.post("/chats", async (req, res) => {
  try {
    const { from, to, message } = req.body;

    const newChat = new Chat({
      from,
      to,
      message
    });

    await newChat.save();

    res.redirect("/chats");
  } catch (error) {
    res.status(400).send("Chat creation failed: " + error.message);
  }
});

app.get("/chats/:id/edit", async (req, res) => {
  try {
    const { id } = req.params;

    const chat = await Chat.findById(id);

    if (!chat) {
      return res.status(404).send("Chat not found");
    }

    res.render("edit", { chat });
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
});

app.put("/chats/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { message } = req.body;

    await Chat.findByIdAndUpdate(
      id,
      { message },
      { runValidators: true }
    );

    res.redirect("/chats");
  } catch (error) {
    res.status(400).send("Chat update failed: " + error.message);
  }
});


app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});