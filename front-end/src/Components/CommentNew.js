import axios from "axios";
import { useContext, useState } from "react";
import { JobsContext } from "../Contexts/JobsContext";
import { apiURL } from "../util/apiURL";
const API = apiURL();

function CommentNew() {
    const { job, setJob } = useContext(JobsContext);
    const { diplayComments, setDisplayComments } = useContext(JobsContext)
    const { comments, setComments } = useContext(JobsContext);
    const [input, setInput] = useState({
        title: "",
        reviewer: "",
        content: "",
        date: ""
    });
    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value });
    };
    const handleSubmit = async (event) => {
        console.log("handleSubmit")
        setInput({ ...input, date: dateAndTime() })
        event.preventDefault();
        await addComment(input)
        setDisplayComments("comments")
    }
    const addComment = async (input) => {
        console.log("addComment", job.id)
        try {
            const res = await axios.post(`${API}/jobs/${job.id}/comments`, input);
            if (res.data.success) {
                console.log(res.data.payload)
                setComments(oldArrayOfComments => [...oldArrayOfComments, res.data.payload]);

            }
        } catch (err) {
            console.log(err);
        }
    };
    const dateAndTime = () => {
        let dateObj = new Date();
        let dayIndex = dateObj.getDay();
        let weekArray = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];
        let day = weekArray[dayIndex];
        let monthIndex = dateObj.getMonth();
        let monthArray = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        let month = monthArray[monthIndex];
        let date = dateObj.getDate();
        let prefix = "";
        if (date === 1 || date === 21 || date === 31) {
            prefix = "st";
        } else if (date === 2 || date === 22) {
            prefix = "nd";
        } else if (date === 3 || date === 23) {
            prefix = "rd";
        } else {
            prefix = "th";
        }
        let hoursFromObj = dateObj.getHours();
        let hour = "";
        let amPm = "am";
        if (hoursFromObj === 0) {
            hour = "12";
        } else if (hoursFromObj === 12) {
            hour = "12"
            amPm = "pm"
        } else if (hoursFromObj > 12) {
            hour = hoursFromObj - 12
            amPm = "pm"
        } else {
            hour = hoursFromObj
        }
        let minFromObj = dateObj.getMinutes()
        let min = ""
        if (minFromObj === 0) {
            min = "00"
        } else if (minFromObj < 10) {
            min = "0" + minFromObj.toString()
        } else {
            min = minFromObj
        }
        input.date = `${day}, ${month} ${date + prefix} at ${hour}:${min + amPm} EST`
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>

                <div className="input-group mb-3">
                    <span
                        htmlFor="title"
                        className="input-group-text"
                        id="inputGroup-sizing-default">title
                    </span>
                    <input
                        id="title"
                        value={input.title}
                        type="text"
                        onChange={handleChange}
                        required
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default" />
                </div>
                <div className="input-group mb-3">
                    <span
                        htmlFor="reviewer"
                        className="input-group-text"
                        id="inputGroup-sizing-default">reviewer
                    </span>
                    <input
                        id="reviewer"
                        value={input.reviewer}
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
                        htmlFor="content">content</span>
                    <textarea
                        id="content"
                        value={input.content}
                        type="text"
                        onChange={handleChange}
                        required
                        className="form-control"
                        aria-label="With textarea"></textarea>
                </div>
                {/* <div className="input-group mb-3">
                    <span
                        htmlFor="date"
                        className="input-group-text"
                        id="inputGroup-sizing-default">date</span>
                    <input
                        id="date"
                        value={input.date}
                        type="text"
                        onChange={handleChange}
                        required
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default" />
                </div> */}

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default CommentNew
