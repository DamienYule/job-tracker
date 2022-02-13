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
const fetchUser = async () =>{

}
const updateUser = async (id, user) => {
  const { uid, email, displayName, photoURL,simultaneous_interpreting,consecutive_interpreting,translate} =
    user;
    // uid TEXT,
    // email VARCHAR,
    // displayName TEXT,
    // photoURL TEXT,
    // simultaneous_interpreting BOOLEAN NOT NULL DEFAULT FALSE,
    // consecutive_interpreting BOOLEAN NOT NULL DEFAULT FALSE,
    // translate BOOLEAN NOT NULL DEFAULT FALSE
  try {
    const updatedUser = await db.one(
      `UPDATE users SET uid=$1, email=$2, displayName=$3, photoURL=$4, simultaneous_interpreting=$5, consecutive_interpreting=$6 , translate=$7 WHERE id=$8 RETURNING *`,
      [uid, email, displayName, photoURL,simultaneous_interpreting,consecutive_interpreting, uid,translate, id]
    );
    return { success: true, payload: updatedUser };
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
};

module.exports = { getAllUsers, createUser, fetchUser, updateUser };

