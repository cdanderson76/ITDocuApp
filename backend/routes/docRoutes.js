import express from 'express';
import { createDocument, getAllDocs } from '../controllers/docController.js';

const docRouter = express.Router();

docRouter.get('/', getAllDocs);
docRouter.post('/addDoc', createDocument);

export default docRouter;