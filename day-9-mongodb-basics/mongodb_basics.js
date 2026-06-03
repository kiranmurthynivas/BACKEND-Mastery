db = db.getSiblingDB("collegeDB");

db.students.insertOne({
  name: "Kiran",
  age: 22,
  course: "CSE",
  city: "Bengaluru"
});

db.students.insertMany([
  {
    name: "Rahul",
    age: 21,
    course: "ECE",
    city: "Mysuru",
    marks: 72
  },
  {
    name: "Sneha",
    age: 23,
    course: "CSE",
    city: "Bengaluru",
    marks: 91
  },
  {
    name: "Asha",
    age: 24,
    course: "MECH",
    city: "Tumakuru",
    marks: 65
  },
  {
    name: "Priya",
    age: 21,
    course: "ECE",
    city: "Mysuru",
    marks: 88
  }
]);

db.students.find();

db.students.find({ course: "CSE" });

db.students.find({ city: "Bengaluru" });

db.students.findOne({ name: "Kiran" });