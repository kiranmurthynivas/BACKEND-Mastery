# SQL Basics - Student Course Database

This project contains basic SQL practice for learning relational databases.

## Topics Practiced

- Database
- SQL
- Tables
- Rows and columns
- CREATE DATABASE
- CREATE TABLE
- Constraints
- Primary key
- Foreign key
- INSERT INTO
- SELECT
- WHERE

## Tables

### courses

| Column | Type | Constraint |
|---|---|---|
| id | INT | PRIMARY KEY |
| course_name | VARCHAR(50) | NOT NULL |

### students

| Column | Type | Constraint |
|---|---|---|
| id | INT | PRIMARY KEY |
| name | VARCHAR(50) | NOT NULL |
| age | INT | CHECK age >= 18 |
| course_id | INT | FOREIGN KEY |

## Practice Queries

```sql
SELECT * FROM students;

SELECT name, age FROM students;

SELECT * FROM students
WHERE age > 21;