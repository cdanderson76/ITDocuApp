import express from 'express';
import { createUser, getAllUsers } from '../controllers/userController.js';

const router = express.Router();

//GET ALL DOCUMENTATION
router.get('/', getAllUsers);
router.post('/signup', createUser);

export default router;