import React from 'react'
// import { Link } from 'react-router-dom'
import { JobsContext } from "../Contexts/JobsContext";
import { useContext } from "react";

function JobListItem({ jobObj }) {
  const {job, setJob} = useContext(JobsContext);
  const handleSelect =()=>{
    setJob(jobObj)
  }
  return (
    <a onClick={handleSelect}  className="list-group-item list-group-item-action">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{jobObj.job_name}</h5>
        <small>{jobObj.id}</small>
      </div>
      <p className="mb-1">Some placeholder content in a paragraph.</p>
      <small>{jobObj.location}</small>
    </a>



  )
}

export default JobListItem
