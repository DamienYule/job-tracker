const express = require("express");
const users = express.Router();
const {getAllUsers,createUser}= require('../queries/usersQuery') 

users.get("/",getAllUsers )
users.post("/",createUser)

module.exports = users



// if admin with specific uid you will be able to...
//     * create, edit and delete job
//     * mark job status
//     * 
//     * 
// each job will have a uid after being asigned  
// any uid will ...
//     * see, comment on job. 
//     * edit only their comments
//     * mark status on job specific to them
//     * asign a job to themselves if job has not been assigned 

