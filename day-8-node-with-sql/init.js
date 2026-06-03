const { faker } = require("@faker-js/faker");
const { randomUUID } = require("crypto");
const connection = require("./connection");

let users = [];

for (let i = 1; i <= 20; i++) {
  users.push([
    randomUUID(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password()
  ]);
}

const query = "INSERT INTO users (id, username, email, password) VALUES ?";

connection.query(query, [users], (err, result) => {
  if (err) {
    console.log("Error inserting users:", err.message);
    return;
  }

  console.log("Fake users inserted:", result.affectedRows);
  connection.end();
});