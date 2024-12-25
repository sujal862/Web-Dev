-- CREATE DATABASE IF NOT EXISTS instagram;

-- USE instagram;

-- CREATE TABLE user(
-- 	id INT,
-- 	age INT,
-- 	name VARCHAR(30) NOT NULL,
-- 	email VARCHAR(30) UNIQUE,
-- 	followers INT DEFAULT 0,
-- 	following  INT,
-- 	CONSTRAINT age_check CHECK(age >= 13),
-- 	PRIMARY KEY (id)
-- );

-- CREATE TABLE post(
-- 	id INT PRIMARY KEY,
--     content varchar(100),
--     user_id INT,
--     FOREIGN KEY (user_id)  REFERENCES user(id)
-- );

INSERT INTO user
(id, age, name, email, followers, following)
VALUES
(1, 18, "adam", "adam123@gmail.com", 12, 19),
(2, 14, "ealma", "ealma123@gmail.com", 12, 19),
(3, 17, "roham", "rohan123@gmail.com", 12, 19),
(4, 15, 'Diana', 'diana@example.com', 10, 5),
(5, 22, 'Eve', 'eve@example.com', 75, 80),
(6, 40, 'Frank', 'frank@example.com', 500, 490),
(7, 19, 'Grace', 'grace@example.com', 100, 110),
(8, 28, 'Hank', 'hank@example.com', 200, 195),
(9, 35, 'Ivy', 'ivy@example.com', 320, 300),
(10, 35, 'Jack', 'jack@example.com', 5, 10);


-- to show data from tables
SELECT id, age, name FROM user;
SELECT * FROM user;
SELECT DISTINCT age FROM user; -- to show only distict ages from user table



