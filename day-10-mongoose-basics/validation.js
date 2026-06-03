const mongoose = require("mongoose");
const connectDB = require("./db");
const Student = require("./models/Student");

async function testValidation() {
  await connectDB();

  try {
    const invalidStudent = await Student.create({
      name: "",
      age: 15,
      course: "AI",
      marks: 120
    });

    console.log(invalidStudent);
  } catch (error) {
    console.log("Validation error:");
    console.log(error.message);
  }

  await mongoose.connection.close();
}

testValidation();