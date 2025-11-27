import User from "../model/user.js";

//GET ALL USERS
export async function getAllUsers(req, res) {

  try {

    const users = await User.find({});

    if(!users) {
      return res.status(404).json({ message: `No users found 🙁`})
    };
    return res.status(200).json({ users })

  } catch(error) {
    return res.status(500).json({ message: `Server error: ${error.message}`});
  }
}