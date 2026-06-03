const mongoose = require("mongoose");
const connectDB = require("./db");
const Student = require("./models/Student");

async function testValidation() {
  await connectDB();

  try {
  const updatedStudent = await Student.findOneAndUpdate(
    { name: "Kiran" },
    { age: 10 },
    { new: true, runValidators: true }
  );

  console.log(updatedStudent);
} catch (error) {
  console.log("Update validation error:");
  console.log(error.message);
}
  await mongoose.connection.close();
}

testValidation();