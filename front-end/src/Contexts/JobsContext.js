import { createContext, useState } from 'react';


export const JobsContext = createContext({});

const JobProvider = ({ children }) => {
    const [jobs, setJobs] = useState([]);
    const [job, setJob] = useState({})
    const [comments, setComments] = useState([])
    const [displayNav, setDisplayNav] = useState("All Jobs")
    const [diplayComments, setDisplayComments] = useState("comments")
    const [display, setDisplay] = useState("Info")
    const [comment, setComment] = useState({})
    return (
        <JobsContext.Provider value={{
            jobs, setJobs,
            job, setJob,
            displayNav, setDisplayNav,
            comments, setComments,
            diplayComments, setDisplayComments,
            comment, setComment,
            display, setDisplay
        }}>
            {children}
        </JobsContext.Provider>
    )
}
export default JobProvider