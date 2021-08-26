import { createContext, useState } from 'react';


export const JobsContext = createContext({});

const JobProvider = ({ children }) => {
    const [jobs, setJobs] = useState([]);
    const [job, setJob] = useState({})
    const [displayNav, setDisplayNav] = useState("All Jobs")
    return (
        <JobsContext.Provider value={{ jobs, setJobs, job, setJob, displayNav, setDisplayNav }}>
            {children}
        </JobsContext.Provider>
    )
}
export default JobProvider