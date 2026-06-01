const express = require("express");

const app = express();

const PORT = 3000;

app.set("view engine", "ejs");

const developer = {
    name : "kiran",
    role : "System Engineer",
    skills : ["react" , "express" , "mongodb"],
    introduce : function() {
        console.log(`Hi , I am ${this.name} . I am ${this.role}`);
    } 
};

app.get("/about", (req, res) => {
    res.render("about", {
        developer,
    })
})

app.listen(PORT , ()=> {
    console.log(`Server listening on PORT ${PORT}`);
});