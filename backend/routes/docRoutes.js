import express from 'express';
import { createDocument, getAllDocs, getDocument, updateDoc } from '../controllers/docController.js';

const docRouter = express.Router();

docRouter.get('/', getAllDocs);
docRouter.post('/addDoc', createDocument);
docRouter.put('/updateDoc/:id', updateDoc);
docRouter.get('/:id', getDocument);

export default docRouter;