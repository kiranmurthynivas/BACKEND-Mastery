const mongoose = require("mongoose");
const connectDB = require("./db");
const Student = require("./models/Student");

async function insertManyStudents() {
  await connectDB();

  const students = await Student.insertMany([
    {
      name: "Rahul",
      age: 21,
      course: "ECE",
      marks: 72,
      city: "Mysuru",
      skills: ["Java", "SQL"]
    },
    {
      name: "Sneha",
      age: 23,
      course: "CSE",
      marks: 91,
      city: "Bengaluru",
      skills: ["React", "Node.js"]
    },
    {
      name: "Asha",
      age: 24,
      course: "MECH",
      marks: 65,
      city: "Tumakuru",
      skills: ["AutoCAD"]
    },
    {
      name: "Divya",
      age: 22,
      course: "CIVIL",
      marks: 78,
      city: "Bengaluru",
      skills: ["MongoDB", "Express.js"]
    }
  ]);

  console.log("Students inserted:");
  console.log(students);

  await mongoose.connection.close();
}

insertManyStudents();