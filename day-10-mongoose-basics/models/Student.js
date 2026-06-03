const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true,
    trim: true
  },

  age: {
    type: Number,
    min: 18,
    max: 60
  },

  course: {
    type: String,
    required: true,
    enum: ["CSE", "ECE", "MECH", "CIVIL"]
  },

  marks: {
    type: Number,
    min: 0,
    max: 100,
    default: 0
  },

  city: {
    type: String,
    default: "Bengaluru"
  },

  skills: [String],

  isPlaced: {
    type: Boolean,
    default: false
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;