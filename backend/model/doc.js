import mongoose from 'mongoose';

const docSchema = mongoose.Schema({

  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  user: {
    type: mongoose.Types.ObjectId,
    //PROVIDING REFRENCE TO THE USER TO PAIR USER WITH DOCUMENTS
    ref: 'User',
    required: true
  },
}, { timestamps: true });

const Doc = mongoose.model('Doc', docSchema);

export default Doc;