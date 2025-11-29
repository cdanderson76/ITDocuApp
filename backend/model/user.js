import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    minLength: 6,
    required: true,
  },

  docs: [{ type: mongoose.Types.ObjectId, ref: 'Doc', required: true }],
}, { timestamps: true });


const User = mongoose.model('User', userSchema);

export default User;