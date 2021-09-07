const cors = require("cors");
const express = require("express");
const app = express();
const users = require('./controllers/users')


app.use(cors());
app.use(express.json());

const jobsController = require("./controllers/jobsController");

app.use("/jobs", jobsController)
app.use("/api/users", users)

app.get("/", (req, res) => {
  res.send("Welcome to PMA's Job Tracker");
});

app.get("*", (req, res) => {
    res.status(404).send('Page not Found')
});


module.exports = app;