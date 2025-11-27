import express from 'express';
import { getAllDocs } from '../controllers/docController.js';

const docRouter = express.Router();

docRouter.get('/', getAllDocs);

export default docRouter;