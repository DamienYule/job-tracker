import axios from "axios";
import { useContext, useState } from "react";
import { JobsContext } from "../Contexts/JobsContext";
import { apiURL } from "../util/apiURL";
const API = apiURL();

function CreateJob() {
    const { jobs, setJobs } = useContext(JobsContext);
    const { displayNav, setDisplayNav } = useContext(JobsContext);
    const [input, setInput] = useState({
        job_name: "",
        description: "",
        location: "",
        number_of_hours: 0,
        status: "",
        completed: false
    });
    console.log(input)
    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value });
    };
    const handleSubmit = () => {

    }

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
                        className="input-group-text"
                        id="inputGroup-sizing-default">Number of hours</span>
                    <input
                        type="number"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default" />
                </div>
                <div className="input-group mb-3">
                    <span htmlFor="package_name" className="input-group-text" id="inputGroup-sizing-default">Status</span>
                    <input
                        id="status"
                        value={input.status}
                        type="text"
                        onChange={handleChange}
                        required
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default" />

                </div>
                {/* <div classNameName="input-group-text mb-3">
                    <label htmlFor="package_name" classNameName="form-label">
                        Package Name
                    </label>
                    <input
                        id="package_name"
                        value={input.package_name}
                        type="text"
                        classNameName="form-control"
                        onChange={handleChange}
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        required
                    />
                </div> */}
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default CreateJob
