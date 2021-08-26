\c pma_jobs_dev;

INSERT INTO pma_jobs (job_name, description, location, number_of_hours,status,completed) VALUES
('setup backend', 'Do the initial setup without only one table','heorku', 12, 'in progress', false),
('set up front end', ' access one table', 'netlify',12, 'not in proress',false)
;