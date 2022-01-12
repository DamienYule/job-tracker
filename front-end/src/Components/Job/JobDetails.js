import React from 'react'
import { useEffect, useContext } from "react";
import { JobsContext } from "../../Contexts/JobsContext";


import JobInfo from './JobInfo';
import JobEdit from './JobEdit';
import Comments from '../Comments/Comments';


function JobDetails() {
    const { job } = useContext(JobsContext);
    const { setDisplayComments } = useContext(JobsContext);
    const { display, setDisplay } = useContext(JobsContext);

    useEffect(() => {

    }, [job])
    const handleDisplay = (e) => {
        setDisplay(e.target.innerHTML)
        if (e.target.innerHTML === "Comments") {
            setDisplayComments("comments")
        }
    }
    return (
        <div className="showSection">
            <h2 className="id-number">Job Number: {job.id}</h2>
            <div className="showList">
                <nav className="showNav">
                    <div className="list-group list-group-horizontal">
                        <button onClick={handleDisplay} className="list-group-item list-group-item-action list-group-item-light">Info</button>
                        <button onClick={handleDisplay} className="list-group-item list-group-item-action list-group-item-light">Comments</button>
                        <button onClick={handleDisplay} className="list-group-item list-group-item-action list-group-item-light">Edit</button>
                    </div>


                </nav>
                <div className="showBox">
                    {!job.id && <div className='noJobSelected'> No job selected</div>}
                    {job.id &&display === "Info" && <JobInfo />}
                    {job.id &&display === "Comments" && <Comments />}
                    {job.id &&display === "Edit" && <JobEdit />}
                </div>
            </div>
        </div>
    )
}

export default JobDetails
