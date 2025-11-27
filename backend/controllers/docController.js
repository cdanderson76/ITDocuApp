import Doc from '../model/doc.js';

//GET ALL DOCS
export async function getAllDocs(req, res) {

  try {

    const docs = await Doc.find({});

    if(!docs) {
      return res.status(404).json({ message: `No documents found...` })
    }
    return res.status(200).json({ docs });

  } catch(error) {
    return res.status(500).json({ message: `Server error: ${error.message}` });
  }
} 