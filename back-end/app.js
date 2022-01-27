const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());
app.use(express.json());

const jobsController = require("./controllers/jobsController");
const users = require('./controllers/usersController')

app.use("/jobs", jobsController)
app.use("/users", users)

app.get("/", (req, res) => {
  res.send("Welcome to PMA's Job Tracker");
});

app.get("*", (req, res) => {
    res.status(404).send('Page not Found')
});


module.exports = app;