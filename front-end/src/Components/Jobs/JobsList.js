import axios from "axios";
import { apiURL } from "../../util/apiURL";
import { useEffect, useContext } from "react";
import { JobsContext } from "../../Contexts/JobsContext";
import { UserContext } from "../../Contexts/UserProvider"
import CompletedJobs from "./CompletedJobs";
import AllJobs from "./AllJobs";
import CreateJob from "./CreateJob";
import AssignedJobs from "./AssignedJobs";
import InProgressJobs from "./InProgressJobs";
const API = apiURL();

const JobsList = () => {
    const user = useContext(UserContext);
    const { setJobs } = useContext(JobsContext);
    const { displayNav } = useContext(JobsContext);

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
    }, [setJobs,user]);
    return (
        <section className="jobsSection">
            <h2>{displayNav}</h2>
            <div className="jobsList">
                {displayNav === "Create Job" && < CreateJob />}
                {displayNav === "All Jobs" && <AllJobs />}
                {displayNav === "Completed" && <CompletedJobs />}
                {displayNav === "Assigned to me" && <AssignedJobs />}
                {displayNav === "In progress" && <InProgressJobs />}
            </div>
        </section>

    );
};

export default JobsList;
