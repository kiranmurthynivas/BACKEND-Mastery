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

