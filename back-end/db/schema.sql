DROP DATABASE IF EXISTS pma_jobs_dev;
CREATE DATABASE pma_jobs_dev;
\c pma_jobs_dev;



-- DROP TABLE IF EXISTS pma_jobs;


CREATE TABLE pma_jobs (
    id SERIAL PRIMARY KEY, 
    job_name TEXT NOT NULL,
    description TEXT NOT NULL, 
    location TEXT NOT NULL, 
    number_of_hours INT,
    status TEXT NOT NULL,
    completed BOOLEAN NOT NULL DEFAULT FALSE
);
