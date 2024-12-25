-- USE instagram;

-- where clause 
-- SELECT * FROM user
-- WHERE followers >= 13;

-- SELECT * FROM user
-- WHERE followers >11
-- LIMIT 2; -- limit clause

-- Order by clause
-- SELECT name,age,followers FROM user
-- ORDER BY followers ASC; -- ASC = asccending , DESC = desccending

-- aggregate func
-- SELECT MAX(age) FROM user; 
-- SELECT count(age) FROM user -- count of users whose age = 14
-- WHERE age = 14;

-- Group By clause
-- SELECT age,max(followers)   -- i.e same age walo ka group bnayaga than har group ma sa max followers print kradega 
-- FROM user
-- GROUP BY age
-- HAVING max(followers) > 200;  -- Having clause

-- Update tables
-- UPDATE user
-- SET followers = 650
-- WHERE age = 18;

-- SET SQL_SAFE_UPDATES = 0;

SELECT * FROM user;

-- delete existing rows
-- DELETE FROM user
-- WHERE age = 17;

-- ALTER TABLE user
-- ADD COLUMN city VARCHAR(30) DEFAULT "Delhi";

-- ALTER TABLE user
-- DROP COLUMN city;

-- ALTER TABLE user
-- RENAME TO users;

