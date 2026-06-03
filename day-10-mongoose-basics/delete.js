const mongoose = require("mongoose");
const connectDB = require("./db");
const Student = require("./models/Student");

async function deleteStudents() {
  await connectDB();

  const deletedOne = await Student.deleteOne({ name: "Asha" });
  console.log("deleteOne result:");
  console.log(deletedOne);

  const deletedMany = await Student.deleteMany({ marks: { $lt: 50 } });
  console.log("deleteMany result:");
  console.log(deletedMany);

  const remainingStudents = await Student.find();
  console.log("Remaining students:");
  console.log(remainingStudents);

  await mongoose.connection.close();
}

deleteStudents();