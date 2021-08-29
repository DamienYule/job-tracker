import axios from "axios";
import { apiURL } from "../util/apiURL";
import { useEffect, useContext, useState } from "react";
import { JobsContext } from "../Contexts/JobsContext";
import CompletedJobs from "./CompletedJobs";
import AllJobs from "./AllJobs";
import CreateJob from "./CreateJob";
const API = apiURL();

const JobsList = () => {
    const { jobs, setJobs } = useContext(JobsContext);
    const { displayNav, setDisplayNav } = useContext(JobsContext);



    useEffect(() => {
        const getAllJobs = async () => {
            try {
                const res = await axios.get(`${API}/jobs`);
                setJobs(res.data.payload);
            } catch (error) {
                console.log(error);
            }
        };
        getAllJobs();
    }, []);
    return (
        <section className="jobsSection">
            <h2>{displayNav}</h2>
            <div  className="jobsList">
                {displayNav === "Create Job" && < CreateJob />}
                {displayNav === "All Jobs" && <AllJobs />}
                {displayNav === "Completed" && <CompletedJobs/>}


            </div>
        </section>

    );
};

export default JobsList;
