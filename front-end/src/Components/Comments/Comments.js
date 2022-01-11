import React from 'react'
import { JobsContext } from "../../Contexts/JobsContext";
import { useContext, } from "react";
import CommentListItem from './CommentListItem';
import CommentEdit from './CommentEdit';
import CommentNew from './CommentNew';

function Comments() {
    const { comments } = useContext(JobsContext);
    const { diplayComments, setDisplayComments } = useContext(JobsContext)
    const handleSelect = () => {
        setDisplayComments("newComment")
    }

    return (
        <div>
            {diplayComments === "comments" && (
                <div>
                    <button onClick={handleSelect} className="btn btn-outline-primary btn-lg paddingAroundNewCommentButton">New comment</button>
                    <ul className="list-group hoverList">
                        {comments.sort((a, b) => (b.id > a.id ? 1 : -1)).map((commentObj) => {
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