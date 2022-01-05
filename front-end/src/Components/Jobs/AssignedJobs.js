import React from 'react'
import JobListItem from './../Job/JobListItem';
import { useContext } from "react";
import {JobsContext} from "../../Contexts/JobsContext"
import { UserContext } from "../../Contexts/UserProvider"

function AssignedJobs() {
    const { jobs, setJobs } = useContext(JobsContext);
    const user = useContext(UserContext);
    return (
        <div className="list-group">
            {jobs
                .filter(jobOwner => jobOwner.uid === user?.uid)
                .sort((a, b) => (a.id > b.id ? 1 : -1))
                .map((jobObj) => {
                    return (
                        <JobListItem key={jobObj.id} jobObj={jobObj} />
                    );
                })}
        </div>
    )
}

export default AssignedJobs
