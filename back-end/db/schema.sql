-- DROP DATABASE IF EXISTS pma_jobs_dev;
-- CREATE DATABASE pma_jobs_dev;
\c pma_jobs_dev;



-- DROP TABLE IF EXISTS pma_jobs;

DROP TABLE IF EXISTS users;

CREATE TABLE users(
    id VARCHAR PRIMARY KEY,
    email VARCHAR
);



-- CREATE TABLE pma_jobs (
--     id SERIAL PRIMARY KEY, 
--     job_name TEXT NOT NULL,
--     description TEXT NOT NULL, 
--     location TEXT NOT NULL, 
--     number_of_hours INT,
--     status TEXT NOT NULL,
--     completed BOOLEAN NOT NULL DEFAULT FALSE
-- );
-- CREATE TABLE job_comments(
--     id SERIAL PRIMARY KEY,
--     title TEXT NOT NULL,
--     reviewer TEXT NOT NULL,
--     content TEXT NOT NULL,
--     date TEXT NOT NULL,
--     pma_jobs_id INT REFERENCES pma_jobs (id) 
--         ON DELETE CASCADE 
-- );
