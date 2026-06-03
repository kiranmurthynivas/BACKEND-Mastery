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


app.listen(PORT , () => {
    console.log(`SERVER LISTENING ON PORT ${PORT}`);
});