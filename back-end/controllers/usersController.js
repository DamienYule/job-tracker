const express = require("express");
const users = express.Router();
const { getAllUsers, createUser, fetchUser, updateUser } = require('../queries/usersQuery')

users.get("/", async (req, res) => {
    const allUsers = await getAllUsers();
    res.json(allUsers)
})
users.get("/:id", async (req, res) => {
    const { id } = req.params;
    const user = await fetchUser(id);
    res.json(user);
})
users.post("/", async () => {
    const createdUser = await createUser();
    res.json(createdUser);
})
users.put("/:id", async (req, res) => {
    const { id } = req.params;
    // const uid = req.query.uid;
    const updatedUser = await updateUser(id, req.body);
    res.json(updatedUser);
});

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

