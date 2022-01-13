const db = require("../db/dbConfig");

const getAllComments = async (jobId) => {
  try {
    const allCommments = await db.any(
      "SELECT * FROM job_comments WHERE pma_jobs_id = $1",
      jobId
    );
    return { success: true, payload: allCommments };
  } catch (error) {
    console.log(error);

    return { success: false, payload: error };
  }
};

const getComment = async (commmentId) => {
  try {
    const comment = await db.one(
      "SELECT * FROM job_comments WHERE id = $1",
      commmentId
    );
    return { success: true, payload: comment };
  } catch (error) {
    return { success: false, payload: error };
  }
};

const createComment = async (jobId, newComment) => {
  const {title, reviewer, content, date,uid} = newComment;
  try {
    const createdReview = await db.one(
      "INSERT INTO job_comments(title , reviewer , content , date ,pma_jobs_id,uid ) VALUES ($1, $2, $3, $4, $5,$6) RETURNING *",
      [title, reviewer, content, date, jobId,uid]);
    return { success: true, payload: createdReview };
  } catch (error) {
    return { success: false, payload: error };
  }
};

const updateComment = async (commentId, comment) => {
    const { title, reviewer, content, date,  pma_jobs_id  } =
    comment;
  try {
    const updatedComment = await db.one(
        "UPDATE job_comments SET title = $1 , reviewer = $2 , content = $3 , date = $4 , pma_jobs_id = $5 WHERE id = $6 RETURNING *",
        [ title, reviewer, content, date,  pma_jobs_id , commentId]
      );
    return { success: true, payload: updatedComment };
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
};

const deleteComment = async (id) => {
  try {
    const deletedComment = await db.one("DELETE FROM job_comments WHERE id = $1 RETURNING *", id)
    return { success: true, payload: deletedComment };
  } catch (error) {
    console.log(error)
    return { success: false, payload: error};
  }
}
module.exports = { getAllComments, getComment, createComment, updateComment, deleteComment };
