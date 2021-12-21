import React from 'react'
import { useContext } from "react";
import { JobsContext } from "../../Contexts/JobsContext";

function JobInfo() {
    const { job, setJob } = useContext(JobsContext);
    return (
        <>
            <div className="card text-dark bg-light  mb-3" >
                <div className="card-header">{job.job_name}</div>
                <div className="card-body">
                    <h5 className="card-text">Location: {job.location}</h5>
                    <p className="card-text">Status: {job.status}</p>
                    <p className="card-text">Scope: {job.number_of_hours} hours</p>
                    <p className="card-text">Description of job: {job.description}</p>
                </div>
            </div>
            {/* job_name: "",
                                                        description: "",
                                                        location: "",
                                                        number_of_hours: 0,
                                                        status: "",
                                                        completed: false */}

        </>
    )
}

export default JobInfo
