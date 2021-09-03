import React from 'react'
import axios from "axios";
import { apiURL } from "../util/apiURL";
import { JobsContext } from "../Contexts/JobsContext";
import { useEffect, useContext, useState } from "react";
import CommentListItem from './CommentListItem';
import CommentEdit from './CommentEdit';
import CommentNew from './CommentNew';
const API = apiURL();

function Comments() {
    const { comments, setComments } = useContext(JobsContext);
    const { diplayComments, setDisplayComments } = useContext(JobsContext)
    const handleSelect =()=>{
        setDisplayComments("newComment")
    }

    return (
        <div>
            {diplayComments === "comments" && (
                <div>
                    <button onClick={handleSelect} class="btn btn-outline-primary btn-lg paddingAroundNewCommentButton">New comment</button>
                    <ul class="list-group hoverList">
                        {comments.map((commentObj) => {
                            return (
                                // <div> {commentObj.title}</div>
                                <CommentListItem key={commentObj.id} commentObj={commentObj} />
                            );
                        })}
                    </ul>
                </div>



            )

            }
            {diplayComments === "editComments" && (<CommentEdit />)}
            {diplayComments === "newComment" && (<CommentNew />)}

        </div>

    )
}

export default Comments
//.sort((a, b) => (a.id > b.id ? 1 : -1))