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
};

//CREATE & SIGN UP USERS
export async function createUser(req, res) {

  const { name, email, password } = req.body;
  let existingUser = ''

  try {

    existingUser = await User.findOne({ email });

    if(existingUser) {
      return res.status(400).json({ message: `User ${email} already exists!  Login instead...` });
    };

    const user = User({
      name,
      email,
      password,
    });

    try {

      await user.save();

    } catch(error) {
      return res.status(500).json({ message: `Server error: ${error.message}`});
    }
     return res.status(201).json({ user });
  } catch(error) {
    return res.status(500).json({ message: `Server error: ${error.message}`});
  }
};