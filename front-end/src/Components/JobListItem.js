import React from 'react'
// import { Link } from 'react-router-dom'
import axios from "axios";
import { apiURL } from "../util/apiURL";
import { JobsContext } from "../Contexts/JobsContext";
import { useContext,useState,useEffect } from "react";

const API = apiURL();

function JobListItem({ jobObj }) {
  const { job, setJob } = useContext(JobsContext);
  const { comments,setComments} = useContext(JobsContext);
  const [displayStatus, setDisplayStatus] = useState("not")
  const handleSelect = async () => {
    setJob(jobObj)
    try {
      const res = await axios.get(`${API}/jobs/${jobObj.id}/comments`);
      setComments(res.data.payload);
    } catch (error) {
      console.log(error)
    }

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
    <li onClick={handleSelect}  className={`${displayStatus} list-group-item `}>
      
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{jobObj.job_name}</h5>
        <small>{jobObj.id}</small>
      </div>
      <p className="mb-1">This job should take approximately {jobObj.number_of_hours} hours.</p>
      <small>{jobObj.location}</small>
    </li>
  )
}

export default JobListItem
