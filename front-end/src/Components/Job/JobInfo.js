import React from 'react'
import { useContext } from "react";
import { JobsContext } from "../../Contexts/JobsContext";
import { updateJob } from "../../Helper/NetworkRequests"
import { UserContext } from "../../Contexts/UserProvider"
import emailjs from 'emailjs-com'

function JobInfo() {
    const { job, setJob } = useContext(JobsContext);
    const { jobs, setJobs } = useContext(JobsContext);
    const user = useContext(UserContext);

    const sendEmail = (e) => {
        e.preventDefault(); 

        emailjs.sendForm('service_bw2ldrc', 'template_4atcvsl', e.target, 'user_JF8h5xahpfBnEny4aFQKD')
            .then(() => {
                handleClaim()
            }, (error) => {
                console.log(error.text);
                handleClaim()
            });
    };

    const handleUnClaim = async () => {
        const newUID = { ...job, owner: null, uid: null, status: "Not in progress" }

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
                    {job.owner ? <div className="owner">{job.owner}</div> :
                        <form onSubmit={sendEmail}>
                            <input id="status" type="submit" value="Claim" className="btn btn-light btn-sm claim-me" />
                            <input className='hideEmailForm' readOnly value={user?.displayName} name="displayName" />
                            <input className='hideEmailForm' readOnly value={job.id} name="id" />
                            <input className='hideEmailForm' readOnly value={job.job_name} name="jobName" />
                            <input className='hideEmailForm' readOnly value={job.description} name="moreInfo" />
                            <input className='hideEmailForm' readOnly value={job.number_of_hours} name="numberOfHours" />
                            <input className='hideEmailForm' readOnly value={job.location} name="location" />
                            <input className='hideEmailForm' readOnly value={user?.email} name="email" />
                        </form>}

                </div>
                <div className="card-body">
                    <h5 className="card-text">Location: {job.location}</h5>
                    <p className="card-text">Status: {job.status}</p>
                    <p className="card-text">Scope: {job.number_of_hours} hours</p>
                    <p className="card-text">Description of job: {job.description}</p>
                </div>
            </div>
            {job.owner && job.uid === user?.uid &&
                <button onClick={handleUnClaim} className="btn btn-primary">
                    Unclaim
                </button>
            }

        </>
    )
}

export default JobInfo
