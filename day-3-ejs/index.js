const express = require("express");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.get("/home", (req, res) => {
    res.render("home");
});

app.get("/profile/:username",(req,res) => {
    const { username } = req.params; 

    res.render("profile", {
        username: username,
        learning: "EJS"
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});