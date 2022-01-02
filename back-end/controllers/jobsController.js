const express = require("express");
const jobs = express.Router();
const jobMessagesController = require("./jobMessagesController")
const {
  fetchAllJobs,
  fetchJob,
  newJob,
  updateJob, deleteJob
} = require("../queries/jobsQueries");

jobs.use('/:jobId/comments', jobMessagesController)
jobs.get("/", async (req, res) => {
  const allJobs = await fetchAllJobs();
  res.json(allJobs);
});

jobs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const job = await fetchJob(id);
  res.json(job);
});

jobs.post("/", async (req, res) => {
  const createdJob = await newJob(req.body);
  res.json(createdJob);
});

jobs.put("/:id", async (req, res) => {
  console.log("hello")
  const { id } = req.params;
  const uid = req.query.uid;
 console.log(uid)

 //if user id matches job.uid or job.uid == null 
  const updatedJob = await updateJob(id, req.body);
  console.log(req.body)
  res.json(updatedJob);
});

jobs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const uid = req.query.uid;
  const deletedJob = await deleteJob(id, uid)
  res.json(deletedJob)
});

module.exports = jobs;