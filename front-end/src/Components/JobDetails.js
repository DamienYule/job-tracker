import React from 'react'
import { useState, useEffect, useContext } from "react";
import { JobsContext } from "../Contexts/JobsContext";
import axios from "axios";
import { apiURL } from "../util/apiURL";
const API = apiURL();

function JobDetails() {
    const { job, setJob } = useContext(JobsContext);
    const {jobs, setJobs} = useContext(JobsContext);
    const [display, setDisplay] = useState("info")
    useEffect(() => {

    }, [job])
    const handleDisplay = (e) => {
        setDisplay(e.target.innerHTML)

    }
    const handleDelete = async () => {
        try {
            const res = await axios.delete(`${API}/jobs/${job.id}`);
            if (res.data.success){
                setJobs(jobs.filter((jb) => jb.id !== job.id));
                setJob({})
              }
        } catch (error) {
            console.log(error)
        }
    }
        console.log(display)
    return (
        <div>
            <h2 className="id-number">Job Number: {job.id}</h2>
            <div className="showSection">
                <nav className="showNav">
                    <div class="list-group list-group-horizontal">
                        <a onClick={handleDisplay} class="list-group-item list-group-item-action list-group-item-light">Info</a>
                        <a onClick={handleDisplay} class="list-group-item list-group-item-action list-group-item-light">Comments</a>
                        <a onClick={handleDisplay} class="list-group-item list-group-item-action list-group-item-light">Status</a>
                    </div>
                    {display === "Info" && (
                        <>
                            <div className="card border-light text-center mb-3" >
                                <div className="card-header">{job.job_name}</div>
                                <div className="card-body">
                                    <h5 className="card-title">Person of Contact: N/A</h5>
                                    <p className="card-text">POC: N/A</p>
                                    <p className="card-text">POC Email: N/A</p>
                                    <p className="card-text">POC Number: N/A</p>
                                    <p className="card-text">Description of job: {job.description}</p>
                                    <p className="card-text"><large>Location: {job.location}</large></p>
                                </div>
                            </div>


                        </>)}
                    {display === "Comments" && (<p>Comming soon</p>)}
                    {display === "Status" && (
                        <div>
                            <h4 className="status-h4">The status of this job is currently </h4>
                            <div class="card" >
                                <div class="card-body">
                                    <h5 class="card-title">Set Status</h5>
                                    <p class="card-text">The buttons on this card will set the status of this job.</p>
                                    <a href="#" class="btn btn-light">Not In Progress</a>
                                    <a href="#" class="btn btn-primary">In Progress</a>
                                    <a href="#" class="btn btn-success">Completed</a>
                                </div>
                            </div>
                            <div class="card" >
                                <div class="card-body">
                                    <h5 class="card-title">Deleting a job</h5>
                                    <p class="card-text">Only you as an administrator can delete this job. Click wisely or
                                        you will have to create the job again.</p>
                                    <a onClick={handleDelete} class="btn btn-danger">Delete Job</a>
                                </div>
                            </div>


                        </div>)}
                </nav>
            </div>
        </div>
    )
}

export default JobDetails
