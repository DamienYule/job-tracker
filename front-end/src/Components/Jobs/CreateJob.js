import axios from "axios";
import { useContext, useState } from "react";
import { JobsContext } from "../../Contexts/JobsContext";
import { apiURL } from "../../util/apiURL";
const API = apiURL();

function CreateJob() {
    const { setJobs } = useContext(JobsContext);
    const { setDisplayNav } = useContext(JobsContext);
    const [input, setInput] = useState({
        job_name: "",
        description: "",
        location: "",
        number_of_hours: 0,
        status: "Not in progress",
        completed: false
    });

    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        await addJob(input)
        setDisplayNav("All Jobs")
    }
    const addJob = async (input) => {
        try {
            const res = await axios.post(`${API}/jobs`, input);
            if (res.data.success) {
                console.log(res.data.payload)
                setJobs(oldArrayOfJobs => [...oldArrayOfJobs, res.data.payload]);

            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="create">
            <form onSubmit={handleSubmit}>

                <div className="input-group mb-3">
                    <span
                        htmlFor="job_name"
                        className="input-group-text"
                        id="inputGroup-sizing-default">Job Name
                    </span>
                    <input
                        id="job_name"
                        value={input.job_name}
                        type="text"
                        onChange={handleChange}
                        required
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default" />
                </div>
                <div className="input-group mb-3">
                    <span
                        className="input-group-text"
                        htmlFor="description">Description</span>
                    <textarea
                        id="description"
                        value={input.description}
                        type="text"
                        onChange={handleChange}
                        required
                        className="form-control"
                        aria-label="With textarea"></textarea>
                </div>
                <div className="input-group mb-3">
                    <span
                        htmlFor="location"
                        className="input-group-text"
                        id="inputGroup-sizing-default">Location</span>
                    <input
                        id="location"
                        value={input.location}
                        type="text"
                        onChange={handleChange}
                        required
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default" />
                </div>
                <div className="input-group mb-3">
                    <span
                        htmlFor="number_of_hours"
                        className="input-group-text"
                        id="inputGroup-sizing-default">Number of hours</span>
                    <input
                        id="number_of_hours"
                        value={input.number_of_hours}
                        onChange={handleChange}
                        type="number"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default CreateJob
