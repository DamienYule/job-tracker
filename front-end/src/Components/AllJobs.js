import React from 'react'
import JobListItem from './JobListItem';
import { useContext } from "react";
import {JobsContext} from "../Contexts/JobsContext"

function AllJobs() {
    const { jobs, setJobs } = useContext(JobsContext);
    return (
        
        <ul class="list-group">
            {jobs
                .sort((a, b) => (a.id > b.id ? 1 : -1))
                .map((jobObj) => {
                    return (
                        <JobListItem key={jobObj.id} jobObj={jobObj} />
                    );
                })}
        </ul>
    )
}

export default AllJobs
