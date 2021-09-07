const db = require("../db/dbConfig");

const createUser = async (req, res, next) => {

  try {
    await db.none(
      "INSERT INTO users(id,email) VALUES(${id},${email})",
      req.body
    )
    res.json("new user created")
  } catch (error) {
    next(error)
  }
};

const getAllUsers = async (req, res, next) => {
  console.log("query getAllUsers")
  try {
    const users = await db.any(
      "SELECT * FROM users")
      res.json({
        users,
        message: "ALL USERS!"
      })
    
    res.jason("new user created")
  } catch (error) {
    next(error)
  }
};
module.exports = { getAllUsers, createUser };

