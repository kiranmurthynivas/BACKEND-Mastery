-- Day 39 Backend 5 - Node with SQL
-- User Management App
-- Practiced by Kiran

CREATE DATABASE IF NOT EXISTS node_sql_app;

USE node_sql_app;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id VARCHAR(100) PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(100) NOT NULL
);

SELECT * FROM users;