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
