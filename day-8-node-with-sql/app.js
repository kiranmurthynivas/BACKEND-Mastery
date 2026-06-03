const express =  require("express");
const methodOverride = require("method-override");
const { randomUUID } = require("crypto");
const connection = require("./connection");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

app.get("/" , (req, res) => {
    const query = "SELECT COUNT(*) AS count FROM users";

    connection.query(query, (err , result) => {
        if(err) {
            return res.status(500).send("Database error");
        }

        const count = result[0].count;
        res.render("home", { count });
    });
});


app.get("/users", (req, res) => {
  const query = "SELECT id, username, email FROM users";

  connection.query(query, (err, users) => {
    if (err) {
      return res.status(500).send("Database error");
    }

    res.render("users", { users });
  });
});

app.get("/users/new", (req, res) => {
    res.render("new");
});

app.post("/users", (req, res) => {
    const { username , email , password } = req.body;

    if(!username || !email || !password ) {
        return res.status(400).send("All fields are required");
    }

    const id = randomUUID();

    const query = "INSERT INTO users (id, username, email, password) VALUES (?, ?, ?, ?)";

    connection.query(query, [id, username, email, password], (err) => {
    if (err) {
      return res.status(500).send("Database error: " + err.message);
    }
    res.redirect("/users");
  });
});


app.listen(PORT , () => {
    console.log(`SERVER LISTENING ON PORT ${PORT}`);
});