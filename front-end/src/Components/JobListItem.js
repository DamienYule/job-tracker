import React from 'react'
// import { Link } from 'react-router-dom'
import { JobsContext } from "../Contexts/JobsContext";
import { useContext,useState,useEffect } from "react";

function JobListItem({ jobObj }) {
  const { job, setJob } = useContext(JobsContext);
  const { displayNav, setDisplayNav } = useContext(JobsContext);
  const [displayStatus, setDisplayStatus] = useState("not")
  const handleSelect = () => {
    setJob(jobObj)
  }
  useEffect(() => {
    let display = ("not")
    if(jobObj.status === "Not in progress"){
      display = "not"
    }else if (jobObj.status === "In progress"){
      display = "in"
    }else{
      display = jobObj.status
    }
    setDisplayStatus(display)
  }, [job])
  return (
    <a onClick={handleSelect}  className={`${displayStatus} list-group-item list-group-item-action`}>
      
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{jobObj.job_name}</h5>
        <small>{jobObj.id}</small>
      </div>
      <p className="mb-1">This job should take approximately {jobObj.number_of_hours} hours.</p>
      <small>{jobObj.location}</small>
    </a>
  )
}

export default JobListItem
