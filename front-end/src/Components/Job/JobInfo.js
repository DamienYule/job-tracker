import React from 'react'
import { useContext } from "react";
import { JobsContext } from "../../Contexts/JobsContext";
import { updateJob } from "../../Helper/NetworkRequests"
import { UserContext } from "../../Contexts/UserProvider"

function JobInfo() {
    const { job, setJob } = useContext(JobsContext);
    const { jobs, setJobs } = useContext(JobsContext);
    const user = useContext(UserContext);

    const handleUnClaim = async () => {
        const newUID = { ...job, owner: null, uid: null }

        const res = await updateJob(newUID, user)
        if (res.data.success) {
            setJobs(jobs.map((jb) => jb.id === job.id ? (jb = res.data.payload) : jb))
            setJob(newUID)
        }
    }
    const handleClaim = async () => {
        const newUID = { ...job, owner: user.displayName, uid: user.uid }

        const res = await updateJob(newUID, user)
        if (res.data.success) {
            setJobs(jobs.map((jb) => jb.id === job.id ? (jb = res.data.payload) : jb))
            setJob(newUID)
        }
    }
    
    return (
        <>
            <div className="card text-dark bg-light  mb-3" >
                <div className="card-header">
                    <big>{job.job_name}</big>
                    {job.owner ? <div className="owner">{job.owner}</div> : <a onClick={handleClaim} id="status" value="1" className="btn btn-light btn-sm claim-me">
                        Claim Job
                    </a>}

                </div>
                <div className="card-body">
                    <h5 className="card-text">Location: {job.location}</h5>
                    <p className="card-text">Status: {job.status}</p>
                    <p className="card-text">Scope: {job.number_of_hours} hours</p>
                    <p className="card-text">Description of job: {job.description}</p>
                </div>
            </div>
            {job.owner && job.uid == user?.uid &&
                <a onClick={handleUnClaim} className="btn btn-primary">
                    Unclaim
                </a>
            }
        </>
    )
}

export default JobInfo
