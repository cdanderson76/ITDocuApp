import User from "../model/user.js";
import bcrypt from 'bcryptjs';

//GET ALL USERS
export async function getAllUsers(req, res) {

  try {

    const users = await User.find({});

    if(!users) {
      return res.status(404).json({ message: `No users found...`})
    };
    return res.status(200).json({ users })

  } catch(error) {
    console.log(error.message);
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

    //HASH PASSWORD TO STORE SECURELY IN MONGODB
    const hashedPassword = bcrypt.hashSync(password)

    const user = User({
      name,
      email,
      password: hashedPassword,
    });

    try {

      await user.save();

    } catch(error) {
      console.log(error.message);
    }
    return res.status(201).json({ user });

  } catch(error) {
    console.log(error.message);
  }
};