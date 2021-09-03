const express = require('express')
const comments = express.Router({
    mergeParams: true
});
const { getAllComments, getComment, createComment, updateComment,deleteComment } = require('../queries/jobCommentsQueiries')

comments.get('/', async (req, res) => {
    const { jobId } = req.params
    const allComments = await getAllComments(jobId)
    res.json(allComments)
})


comments.get('/:commmentId', async(req, res) =>{
    const { commmentId } = req.params;
    const comment = await getComment(commmentId);
    res.json(comment)
}) 

comments.post('/', async (req, res) => {
    const newComment = req.body;
    const { jobId } = req.params
    const createdComment = await createComment(jobId, newComment);
    res.json(createdComment)
})

comments.put('/:commentId', async(req, res) => {
    const comment = req.body
    const { commentId } = req.params;
    const editedComment = await updateComment(commentId, comment);
    res.json(editedComment);
})

comments.delete('/:commentId', async (req,res) =>{
    const { commentId} = req.params;
    const deletedComment = await deleteComment(commentId);
    res.json(deletedComment);
});

module.exports = comments