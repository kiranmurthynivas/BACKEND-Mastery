-- Day 35 SQL Basics
-- Student Course Databas-- Practiced by Kiran

CREATE DATABASE college;

USE college;

SELECT DATABASE();

SHOW TABLES;

CREATE TABLE students (
  id INT,
  name VARCHAR(50),
  age INT,
  course VARCHAR(50)
);

SHOW TABLES;

DESC students;

DROP TABLE IF EXISTS students;

DROP TABLE IF EXISTS courses;

CREATE TABLE courses (
  id INT PRIMARY KEY,
  course_name VARCHAR(50) NOT NULL
);

CREATE TABLE students (
  id INT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  age INT CHECK (age >= 18),
  course_id INT,
  FOREIGN KEY (course_id) REFERENCES courses(id)
);


INSERT INTO courses
(id, course_name)
VALUES
(1, 'Computer Science'),
(2, 'Electronics'),
(3, 'Mechanical');

INSERT INTO students
(id, name, age, course_id)
VALUES
(1, 'Kiran', 22, 1),
(2, 'Rahul', 21, 2),
(3, 'Sneha', 23, 1),
(4, 'Asha', 24, 3);

SELECT * FROM students;

SELECT name, age FROM students;

SELECT * FROM courses;

SELECT * FROM students;
WHERE age > 21;

SELECT * FROM students;
WHERE course_id = 1;