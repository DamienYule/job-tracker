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
    const [loginModal , setLoginModal] = useState(false)
    const [signInModal, setSignInModal] = useState(false)
    // console.log({children})
    return (
        <JobsContext.Provider value={{
            jobs, setJobs,
            job, setJob,
            displayNav, setDisplayNav,
            comments, setComments,
            diplayComments, setDisplayComments,
            comment, setComment,
            display, setDisplay,
            loginModal , setLoginModal,
            signInModal, setSignInModal
        }}>
            {children}
        </JobsContext.Provider>
    )
}
export default JobProvider