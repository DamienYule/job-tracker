import React from 'react'
import { useContext } from "react";
import { JobsContext } from "../../Contexts/JobsContext";
import axios from "axios";
import { apiURL } from "../../util/apiURL";
const API = apiURL();
function CommentEdit() {
    const { comment, setComment } = useContext(JobsContext);
    const { comments, setComments } = useContext(JobsContext);
    const { setDisplayComments } = useContext(JobsContext);

    const handleChange = (e) => {
        setComment({ ...comment, [e.target.id]: e.target.value });
    };
    const handleDelete = async () => {
        try {
            const res = await axios.delete(`${API}/jobs/1/comments/${comment.id}`);
            if (res.data.success) {
                setComments(comments.filter((comt) => comt.id !== comment.id));
                setDisplayComments("comments")
            }
        } catch (error) {
            console.log(error)
        }
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        await updateComment(comment)
        setDisplayComments("comments")

    }
    const updateComment = async (input) => {
        try {
            const res = await axios.put(`${API}/jobs/1/comments/${comment.id}`, input);
            if (res.data.success) {
                setComments(comments.map((comt) => comt.id === comment.id ? (comt = res.data.payload) : comt))
            }
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div>

            {/* content, date, pma_jobs_id, reviewer, title */}


            <div className="card" >
                <div className="card-body">

                    <form onSubmit={handleSubmit}>

                        <div className="input-group mb-3">
                            <span
                                htmlFor="title"
                                className="input-group-text"
                                id="inputGroup-sizing-default">Job Name
                            </span>
                            <input
                                id="title"
                                value={comment.title}
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
                                htmlFor="content">Content</span>
                            <textarea
                                id="content"
                                value={comment.content}
                                type="text"
                                onChange={handleChange}
                                required
                                className="form-control"
                                aria-label="With textarea"></textarea>
                        </div>
                        <div className="input-group mb-3">
                            <span
                                htmlFor="date"
                                className="input-group-text"
                                id="inputGroup-sizing-default">Date</span>
                            <input
                                id="date"
                                value={comment.date}
                                type="text"
                                onChange={handleChange}
                                required
                                className="form-control"
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-default" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <button type="button" onClick={handleDelete} className="btn btn-danger">Delete</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default CommentEdit
