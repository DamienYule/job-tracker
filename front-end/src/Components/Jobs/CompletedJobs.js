import React from 'react'
import JobListItem from './../Job/JobListItem';
import { useContext } from "react";
import {JobsContext} from "../../Contexts/JobsContext"

function CompletedJobs() {
    const { jobs } = useContext(JobsContext);
    
    return (
        <div className="list-group">
            {jobs
                .filter(jobComplete => jobComplete.status === "Completed")
                .sort((a, b) => (a.id > b.id ? 1 : -1))
                .map((jobObj) => {
                    return (
                        <JobListItem key={jobObj.id} jobObj={jobObj} />
                    );
                })}
        </div>
    )
}

export default CompletedJobs
