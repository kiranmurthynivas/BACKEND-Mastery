const express = require("express");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.get("/login-status", (req,res) => {
    res.render("login-status", {
        isLoggedIn: true,
        username:  "kiran"
    });
});

app.get("/results/:marks", (req, res) => {
    const { marks } =  req.params;
    res.render("result",{
        marks : Number(marks)
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});