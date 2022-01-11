import React from 'react'
import { JobsContext } from "../../Contexts/JobsContext";
import {  useContext} from "react";

function CommentListItem({ commentObj }) {
    const {setDisplayComments} = useContext(JobsContext);
    const {  setComment } = useContext(JobsContext);

    const handleSelect = () => {
        setDisplayComments("editComments")
        setComment(commentObj)
}
    return (
        <li className="list-group-item ">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{commentObj.title}</h5>
                <small className="cursorOnButton"><a><button onClick={handleSelect}  className="btn btn-outline-secondary btn-sm cursorOnButton">{commentObj.reviewer}</button></a></small>
            </div>
            <p className="mb-1">{commentObj.content}</p>
            <small>{commentObj.date}</small>
        </li>
    )
}

export default CommentListItem
