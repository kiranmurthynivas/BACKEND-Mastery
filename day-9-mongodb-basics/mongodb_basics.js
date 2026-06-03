db = db.getSiblingDB("collegeDB");

db.students.insertOne({
  name: "Kiran",
  age: 22,
  course: "CSE",
  city: "Bengaluru"
});