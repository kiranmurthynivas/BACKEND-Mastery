const mongoose = require("mongoose");
const connectDB = require("./db");
const Student = require("./models/Student");

async function updateStudents() {
  await connectDB();

  const result1 = await Student.updateOne(
    { name: "Kiran" },
    { $set: { marks: 90 } }
  );

  console.log("updateOne result:");
  console.log(result1);

  const result2 = await Student.updateMany(
    { course: "CSE" },
    { $set: { isPlaced: true } }
  );

  console.log("updateMany result:");
  console.log(result2);

  const updatedStudent = await Student.findOneAndUpdate(
    { name: "Rahul" },
    { $set: { city: "Bengaluru" } },
    { new: true }
  );

  console.log("Updated student:");
  console.log(updatedStudent);

  await mongoose.connection.close();
}

updateStudents();