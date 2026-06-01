const express = require("express");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

const instaData = {
  kiran: {
    name: "Kiran",
    followers: 1200,
    following: 300,
    posts: [
      "Learning Node.js",
      "Building Express API",
      "Started EJS"
    ]
  },
  virat: {
    name: "Virat Kohli",
    followers: 270000000,
    following: 300,
    posts: [
      "Practice session",
      "Match day",
      "Fitness routine"
    ]
  },
  rahul: {
    name: "Rahul",
    followers: 800,
    following: 250,
    posts: [
      "Travel photo",
      "Backend notes",
      "Coffee and code"
    ]
  }
};

app.get("/ig/:username", (req, res) => {
  const { username } = req.params;
  const data = instaData[username];

  if (!data) {
    return res.render("notfound", { username });
  }

  res.render("instagram", {
    username,
    data
  });
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});