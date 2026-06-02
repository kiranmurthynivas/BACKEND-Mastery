-- Day 36 SQL Part 2
-- Advanced SQL practice
-- Practiced by Kiran

CREATE DATABASE IF NOT EXISTS college_part2;

USE college_part2;


DROP TABLE IF EXISTS students;

CREATE TABLE students (
  id INT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  age INT,
  course VARCHAR(50),
  marks INT,
  city VARCHAR(50)
);

INSERT INTO students
(id, name, age, course, marks, city)
VALUES
(1, 'Kiran', 22, 'CSE', 85, 'Bengaluru'),
(2, 'Rahul', 21, 'ECE', 72, 'Mysuru'),
(3, 'Sneha', 23, 'CSE', 91, 'Bengaluru'),
(4, 'Asha', 24, 'MECH', 65, 'Tumakuru'),
(5, 'Rohit', 22, 'CSE', 45, 'Bengaluru'),
(6, 'Priya', 21, 'ECE', 88, 'Mysuru'),
(7, 'Manoj', 25, 'MECH', 55, 'Hubballi'),
(8, 'Divya', 22, 'CIVIL', 78, 'Bengaluru');

SELECT * FROM students;

SELECT * FROM students
WHERE course = 'CSE';

SELECT * FROM students
WHERE marks > 80;

SELECT * FROM students
WHERE city = 'Bengaluru';

SELECT name, marks FROM students
WHERE marks >= 75;

SELECT * FROM students
WHERE marks != 85;

SELECT * FROM students
WHERE marks BETWEEN 60 AND 90;

SELECT * FROM students
WHERE course IN ('CSE', 'ECE');

SELECT * FROM students
WHERE course NOT IN ('MECH', 'CIVIL');

SELECT * FROM students
WHERE name LIKE 'S%';

SELECT * FROM students
WHERE city = 'Bengaluru' AND marks > 70;

SELECT * FROM students
WHERE course = 'CSE' OR course = 'ECE';

SELECT * FROM students
WHERE NOT city = 'Mysuru';

SELECT * FROM students
ORDER BY marks ASC;

SELECT * FROM students
ORDER BY marks DESC;

SELECT name, age, marks FROM students
ORDER BY age ASC, marks DESC;

