CREATE DATABASE db;

USE db;

CREATE TABLE cows (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(40) NOT NULL,
  text VARCHAR(200) NOT NULL
);