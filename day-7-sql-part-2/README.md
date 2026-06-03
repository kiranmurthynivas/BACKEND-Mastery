# SQL Part 2 - Advanced Queries

This project contains SQL practice for filtering, sorting, grouping, updating, deleting, and modifying tables.

## Topics Practiced

- WHERE clause
- Operators in WHERE
- BETWEEN
- IN
- LIKE
- AND / OR / NOT
- ORDER BY
- LIMIT
- Aggregate functions
- GROUP BY
- HAVING
- SQL clause order
- UPDATE
- DELETE
- ALTER TABLE
- TRUNCATE vs DELETE vs DROP

## Table Used

students

| Column | Type |
|---|---|
| id | INT PRIMARY KEY |
| name | VARCHAR(50) |
| age | INT |
| course | VARCHAR(50) |
| marks | INT |
| city | VARCHAR(50) |

## Important SQL Order

```sql
SELECT column_name
FROM table_name
WHERE condition
GROUP BY column_name
HAVING group_condition
ORDER BY column_name
LIMIT number;