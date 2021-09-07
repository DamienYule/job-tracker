const express = require("express");
const users = express.Router();
const {getAllUsers,createUser}= require('../queries/usersQuery') 

users.get("/",getAllUsers )
users.post("/",createUser)

module.exports = users