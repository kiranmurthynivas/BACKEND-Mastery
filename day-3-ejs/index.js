const express = require("express");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.get("/skills", (req, res) => {
  const skills = ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "EJS"];

  res.render("skills", {
    skills
  });
});
    



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});