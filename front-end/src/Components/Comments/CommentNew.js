import axios from "axios";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../Contexts/UserProvider";
import { useContext, useState, useEffect } from "react";
import { JobsContext } from "../../Contexts/JobsContext";
import { apiURL } from "../../util/apiURL";
import { dateAndTime } from "../../Helper/DateAndTime";
const API = apiURL();

function CommentNew() {
    let history = useHistory();
    const user = useContext(UserContext);
    const { job, } = useContext(JobsContext);
    const { setDisplayComments } = useContext(JobsContext)
    const { setComments } = useContext(JobsContext);
    const [input, setInput] = useState({
        title: "",
        reviewer: user && user.displayName,
        content: "",
        date: ""
    });
    useEffect(() => {
        if (!user) {
            history.push("/");
        }

    }, [user])
    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value });
    };
    const handleSubmit = async (event) => {
        console.log("handleSubmit")
        dateAndTime(input)
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

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <legend>{user && user.displayName}</legend>
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
