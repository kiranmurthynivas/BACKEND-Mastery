const mongoose = require("mongoose");
const connectDB = require("./db");
const Student = require("./models/Student");

async function findStudents() {
    await connectDB();

    const allStudents = await Student.find();
    console.log("All students:");
    console.log(allStudents);

    const cseStudents = await Student.find({ course: "CSE" });
    console.log("CSE students:");
    console.log(cseStudents);

    const highScorers = await Student.find({ marks: { $gt: 80 } });
    console.log("Students with marks greater than 80:");
    console.log(highScorers);

    const oneStudent = await Student.findOne({ name: "Kiran" });
    console.log("Find one student:");
    console.log(oneStudent);

  await mongoose.connection.close();
}

findStudents();