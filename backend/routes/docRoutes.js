import express from 'express';
import { createDocument, getAllDocs, updateDoc } from '../controllers/docController.js';

const docRouter = express.Router();

docRouter.get('/', getAllDocs);
docRouter.post('/addDoc', createDocument);
docRouter.put('/updateDoc/:id', updateDoc);

export default docRouter;