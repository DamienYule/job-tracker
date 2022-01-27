-- DROP DATABASE IF EXISTS pma_jobs_dev;
-- CREATE DATABASE pma_jobs_dev;
\ c pma_jobs_dev;

-- DROP TABLE IF EXISTS pma_jobs;
-- DROP TABLE IF EXISTS job_comments;
-- DROP TABLE IF EXISTS users;
CREATE TABLE users(
    id VARCHAR PRIMARY KEY,
    uid TEXT,
    email VARCHAR,
    displayName TEXT,
    photoURL TEXT,
    simultaneous_interpreting BOOLEAN NOT NULL DEFAULT FALSE,
    consecutive_interpreting BOOLEAN NOT NULL DEFAULT FALSE,
    translation BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE languages(id VARCHAR PRIMARY KEY, language TEXT);

CREATE TABLE user_language(language_id INT, users_id INT);

CREATE TABLE users_notes(
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    date TEXT NOT NULL,
    users_id INT REFERENCES users (id) ON DELETE CASCADE
);

-- CREATE TABLE pma_jobs (
--     id SERIAL PRIMARY KEY, 
--     job_name TEXT NOT NULL,
--     description TEXT NOT NULL, 
--     location TEXT NOT NULL, 
--     number_of_hours INT,
--     status TEXT NOT NULL,
--     uid TEXT,
--     owner TEXT,
--     completed BOOLEAN NOT NULL DEFAULT FALSE
-- );
-- CREATE TABLE job_comments(
--     id SERIAL PRIMARY KEY,
--     title TEXT NOT NULL,
--     reviewer TEXT NOT NULL,
--     content TEXT NOT NULL,
--     date TEXT NOT NULL,
--     uid TEXT,
--     owner TEXT,
--     pma_jobs_id INT REFERENCES pma_jobs (id) 
--         ON DELETE CASCADE 
-- );