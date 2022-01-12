import React from 'react'
import JobListItem from '../Job/JobListItem';
import { useContext } from "react";
import { JobsContext } from "../../Contexts/JobsContext"

function AllJobs() {
    const { jobs } = useContext(JobsContext);
    return (

        <ul className="list-group">
            {jobs
                .sort((a, b) => (b.id > a.id ? 1 : -1))
                .map((jobObj) => {
                    return (
                        <JobListItem key={jobObj.id} jobObj={jobObj} />
                    );
                })}
        </ul>
    )
}

export default AllJobs
