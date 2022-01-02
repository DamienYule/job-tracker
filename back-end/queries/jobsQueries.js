const db = require("../db/dbConfig");

const fetchAllJobs = async () => {
  try {
    const allJobs = await db.any("SELECT * FROM pma_jobs");
    return { success: true, payload: allJobs };
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
};

const fetchJob = async (id) => {
  try {
    const onePackage = await db.one(
      "SELECT * FROM pma_jobs WHERE id=$1",
      id
    );
    return { success: true, payload: onePackage };
  } catch (error) {
    return { success: false, payload: error };
  }
};

const newJob = async (job) => {
  const { job_name, description, location, number_of_hours,status,completed } =
    job;
  try {
    const createdJob = await db.one(
      `INSERT INTO pma_jobs (job_name, description, location, number_of_hours,status,completed) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`,
      [job_name, description, location, number_of_hours,status,completed]
    );
    return { success: true, payload: createdJob };
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
};

const updateJob = async (id, job) => {
  const { job_name, description, location, number_of_hours,status,completed,owner,uid} =
    job;
  try {
    const updatedJob = await db.one(
      `UPDATE pma_jobs SET job_name=$1, description=$2, location=$3, number_of_hours=$4, status=$5, completed=$6 , uid=$7, owner=$8 WHERE id=$9 RETURNING *`,
      [job_name, description, location, number_of_hours,status,completed, uid,owner, id]
    );
    return { success: true, payload: updatedJob };
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
};

const deleteJob = async (id) => {
  try {
    const deletedJob = await db.one(`DELETE FROM pma_jobs WHERE id=$1 RETURNING *`, id)
    return { success: true, payload: deletedJob}
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
}

module.exports = { fetchAllJobs, fetchJob, newJob, updateJob, deleteJob };