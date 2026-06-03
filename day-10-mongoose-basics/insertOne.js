const mongoose = require("mongoose");
const connectDB = require("./db");
const Student = require("./models/Student");

async function insertOneStudent() {
    await connectDB();

    const student = new Student({
        name: "Kiran",
        age: 22,
        course: "CSE",
        marks: 85,
        city: "Bengaluru",
        skills: ["JavaScript", "Node.js", "MongoDB"]
    });

    await student.save();

    console.log("Student inserted");
    console.log(student);

    await mongoose.connection.close();
}

insertOneStudent();