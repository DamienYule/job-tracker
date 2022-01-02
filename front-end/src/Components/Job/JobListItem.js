import React from 'react'
// import { Link } from 'react-router-dom'
import axios from "axios";
import { apiURL } from "../../util/apiURL";
import { JobsContext } from "../../Contexts/JobsContext";
import { useContext,useState,useEffect } from "react";

const API = apiURL();

function JobListItem({ jobObj }) {
  const { job, setJob } = useContext(JobsContext);
  const { comments,setComments} = useContext(JobsContext);
  const { diplayComments, setDisplayComments} = useContext(JobsContext);
  const { display, setDisplay} = useContext(JobsContext);
  const [displayStatus, setDisplayStatus] = useState("not")
  const handleSelect = async () => {
    setDisplay("Info")
    setJob(jobObj)
    setDisplayComments("comments")
    try {
      const res = await axios.get(`${API}/jobs/${jobObj.id}/comments`);
      setComments(res.data.payload);
    } catch (error) {
      console.log(error)
    }
    console.log(job)

  }
  useEffect(() => {
    let display = ("not")
    if(jobObj.status === "Not in progress"){
      display = "list-group-item-action list-group-item-light"
    }else if (jobObj.status === "In progress"){
      display = "list-group-item-action list-group-item-primary"
    }else{
      display = "list-group-item-action list-group-item-success"
    }
    setDisplayStatus(display)
  }, [job])
  return (
    <li onClick={handleSelect}  className={`${displayStatus} list-group-item `}>
      
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{jobObj.job_name}</h5>
        <small>{jobObj.id}</small>
      </div>
      <p className="mb-1">{jobObj.number_of_hours} hour job.</p>
      <small>{jobObj.location}</small>
    </li>
  )
}

export default JobListItem
