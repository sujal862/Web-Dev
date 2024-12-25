-- Practise q-1 
CREATE DATABASE IF NOT EXISTS college;

USE college;
CREATE TABLE Teacher(
	id INT PRIMARY KEY,
    name VARCHAR(30),
    subject VARCHAR(30),
    salary INT
	);
    
INSERT INTO Teacher
(id, name, subject, salary)
VALUES
(23, "ajay", "math", 50000),
(47, "bharat", "english", 60000),
(18, "chetan", "chemistry", 45000),
(9, "divya", "physics", 75000);

SELECT * from Teacher;

SELECT name,salary FROM Teacher
WHERE salary > 55000; 

ALTER TABLE Teacher 
CHANGE COLUMN salary ctc INT;

-- inc the salary by 25% of all teacher 
UPDATE Teacher
SET ctc = ctc + 0.25 * ctc;

SET SQL_SAFE_UPDATES= 0;

ALTER TABLE Teacher
ADD COLUMN city VARCHAR(30) DEFAULT "Gurgaon";

ALTER TABLE Teacher
DROP COLUMN ctc;


-- Practise q-2
CREATE TABLE student(
	roll_no INT PRIMARY KEY,
    name VARCHAR(30),
    city VARCHAR(30),
    marks INT
    );

INSERT INTO student
(roll_no, name, city, marks)
VALUES
(110, "adam", "Delhi", 76),
(108, "bob", "Mumbai", 65),
(124, "casey", "Pune", 94),
(112, "duke", "Pune", 80);

SELECT * FROM student;

SELECT name FROM student
WHERE marks > 75;

SELECT DISTINCT city FROM student;

SELECT city, max(marks) 
FROM student
GROUP BY city;

SELECT AVG(marks) FROM student;

ALTER TABLE student
ADD COLUMN grade VARCHAR(2); 

UPDATE student
SET grade = 'O'
WHERE marks > 80;

UPDATE student
SET grade = 'A'
WHERE marks BETWEEN 70 AND 80;

UPDATE student
SET grade = 'B'
WHERE marks BETWEEN 60 AND 70;
