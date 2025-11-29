import express from 'express';
import { createDocument, deleteDocument, getAllDocs, getDocument, updateDoc } from '../controllers/docController.js';

const docRouter = express.Router();

docRouter.get('/', getAllDocs);
docRouter.post('/addDoc', createDocument);
docRouter.put('/updateDoc/:id', updateDoc);
docRouter.get('/:id', getDocument);
docRouter.delete('/:id', deleteDocument);

export default docRouter;