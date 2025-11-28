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
};

//CREATE DOCUMENT
export async function createDocument(req, res) {

  const { title, description, image, user } = req.body;

  let existingDocument = ''

  try {

    existingDocument = await Doc.findOne({ title });

    if(existingDocument) {
      return res.status(400).json({ message: `Document ${title} has already been created.  Choose another title...` });
    };

    const document = Doc({
      title,
      description,
      image,
      user,
    });

    try {

      await document.save();

    } catch(error) {
      return res.status(500).json({ message: `Server error: ${error.message}` });
    };
    return res.status(201).json({ document });
  } catch(error) {
    return res.status(500).json({ message: `Server error: ${error.message}` });
  }
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