\c pma_jobs_dev;

INSERT INTO pma_jobs (job_name, description, location, number_of_hours,status,completed) VALUES
('setup backend', 'Do the initial setup without only one table','heorku', 12, 'in progress', false),
('set up front end', ' access one table', 'netlify',12, 'not in proress',false)
;

INSERT INTO job_comments (pma_jobs_id , title , reviewer , content , date ) VALUES
(1,	'Almost done',	'Damien Yule',	'This message will be edited','Wednesday, March 2nd at 12:16pm'),
(2, 'Almost done!', 'Damien Yule','The next I open the browser you will see','Tuesday, March 2nd at 12:16pm'),
(2, 'Done', 'Damien Yule', 'There is so much to say here I dont know where to start.','Monday, March 2nd at 12:16pm'),
(3, 'So Done','Damien Yule', 'The reality is I dont know what to say which is why I am not starting','Monday, March 2nd at 12:16pm')
;