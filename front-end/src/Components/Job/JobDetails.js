import React from 'react'
import { useState, useEffect, useContext } from "react";
import { JobsContext } from "../../Contexts/JobsContext";


import JobInfo from './JobInfo';
import JobEdit from './JobEdit';
import Comments from '../Comments/Comments';



function JobDetails() {
    const { job, setJob } = useContext(JobsContext);
    const { diplayComments, setDisplayComments} = useContext(JobsContext);
    const { display, setDisplay} = useContext(JobsContext);
    useEffect(() => {

    }, [job])
    const handleDisplay = (e) => {
        setDisplay(e.target.innerHTML)
        if (e.target.innerHTML === "Comments"){
            setDisplayComments("comments")
        }
    }

    console.log(display)
    return (
        <div className="showSection">
            <h2 className="id-number">Job Number: {job.id}</h2>
            <div className="showList">
                <nav className="showNav">
                    <div className="list-group list-group-horizontal">
                        <a onClick={handleDisplay} className="list-group-item list-group-item-action list-group-item-light">Info</a>
                        <a onClick={handleDisplay} className="list-group-item list-group-item-action list-group-item-light">Comments</a>
                        <a onClick={handleDisplay} className="list-group-item list-group-item-action list-group-item-light">Edit</a>
                    </div>


                </nav>
                <div className="showBox">
                    {display === "Info" && <JobInfo />}
                    {display === "Comments" && <Comments/>}
                    {display === "Edit" && <JobEdit />}
                </div>
            </div>
        </div>
    )
}

export default JobDetails
