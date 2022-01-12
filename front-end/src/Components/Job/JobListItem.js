import React from 'react'
import axios from "axios";
import { apiURL } from "../../util/apiURL";
import { JobsContext } from "../../Contexts/JobsContext";
import { useContext } from "react";

const API = apiURL();

function JobListItem({ jobObj }) {
  const { setJob } = useContext(JobsContext);
  const { setComments } = useContext(JobsContext);
  const { setDisplayComments } = useContext(JobsContext);
  const { setDisplay } = useContext(JobsContext);
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

  }
  let setDisplayStatus = ""
  if (jobObj.status === "Not in progress") {
    setDisplayStatus = "list-group-item-action list-group-item-light"
  } else if (jobObj.status === "In progress") {
    setDisplayStatus = "list-group-item-action list-group-item-primary"
  } else {
    setDisplayStatus = "list-group-item-action list-group-item-success"
  }


  return (
    <li onClick={handleSelect} className={`${setDisplayStatus} list-group-item `}>

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
