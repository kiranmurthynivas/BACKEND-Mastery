const express = require("express");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

const app = express();
const PORT = 3000;


app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));

let posts = [
  {
    id: uuidv4(),
    username: "kiran",
    content: "I am learning REST backend."
  },
  {
    id: uuidv4(),
    username: "rahul",
    content: "Express makes routing easier."
  }
];

app.get("/", (req, res) => {
  res.redirect("/posts");
});

app.get("/posts", (req,res)=> {
    res.render("index", {posts});
})

app.get("/posts/new", (req, res) => {
    res.render("new");
});

app.post("/posts", (req, res) => {
  const { username, content } = req.body;

  const newPost = {
    id: uuidv4(),
    username,
    content
  };

  posts.push(newPost);

  res.redirect("/posts");
});


app.listen(PORT , () => {
    console.log(`Server Listening on PORT ${PORT}`);
})
