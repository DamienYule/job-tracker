import React from 'react'
import JobListItem from './JobListItem';
import { useContext } from "react";
import {JobsContext} from "../Contexts/JobsContext"

function AllJobs() {
    const { jobs, setJobs } = useContext(JobsContext);
    return (
        <div class="list-group">
            {jobs
                .sort((a, b) => (a.id > b.id ? 1 : -1))
                .map((jobObj) => {
                    return (
                        <JobListItem key={jobObj.id} jobObj={jobObj} />
                    );
                })}
        </div>
    )
}

export default AllJobs
