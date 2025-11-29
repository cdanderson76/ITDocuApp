import Doc from '../model/doc.js';
import User from '../model/user.js';
import mongoose from 'mongoose';

//GET ALL DOCS
export async function getAllDocs(req, res) {

  try {

    const docs = await Doc.find({});

    if(!docs) {
      return res.status(404).json({ message: `No documents found...` })
    }
    return res.status(200).json({ docs });

  } catch(error) {
    console.log(error.message);
  }
};

//CREATE DOCUMENT
export async function createDocument(req, res) {

  const { title, description, image, user } = req.body;

  let existingUser = ''

  try {

    existingUser = await User.findById(user);

  } catch(error) {
    console.log(error.message);
  };

  if(!existingUser) {
    return res.status(500).json({ message: 'Unable to find user by this ID...' });
  };

  try {

     const document = new Doc({
      title,
      description,
      image,
      user,
    });

    try {

      const session = await mongoose.startSession();
        session.startTransaction();
        await document.save({ session });
        existingUser.docs.push(document);
        await existingUser.save({ session });
        await session.commitTransaction();

    } catch(error) {
      console.log(error.message);
      return res.status(500).json({ message: `Server error: ${error.message}` });
    }
    return res.status(201).json({ document })

  } catch(error) {
    console.log(error.message);
    return res.status(500).json({ message: `Server error: ${error.message}` });
  };
};

//UPDATE DOCUMENT
export async function updateDoc(req, res) {

  const { title, description } = req.body;
  const { id } = req.params;

  let document = '';

  try {

      document = await Doc.findByIdAndUpdate(id, {
      title,
      description
    });
    
    return res.status(200).json({ document });

  } catch(error) {
    console.log(error.message);
  }
  
  if(!document) {
    return res.status(400).json({ message: `No document found...` });
  }
};

//GET BLOG
export async function getDocument(req, res) {

  const { id } = req.params;

  let document = '';

  try {
    
    document = await Doc.findById(id);

    return res.status(200).json({ document });

  } catch(error) {
    console.log(error.message);
  };

  if(!document) {
    return res.status(400).json({ message: `No document found...` });
  };
};

//DELETE DOCUMENT
export async function deleteDocument(req, res) {

  const { id } = req.params;

  let document = '';

  try {

    document =  await Doc.findByIdAndDelete(id);

    if(!document) {
      return res.status(400).json({ message: 'Document not found...'});
    };

    return res.status(200).json({ message: 'Document deleted successfully!' });

  } catch(error) {
    console.log(error.message);
  }
}