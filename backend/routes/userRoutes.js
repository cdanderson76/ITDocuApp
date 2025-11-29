import express from 'express';
import { createUser, getAllUsers, loginUser } from '../controllers/userController.js';

const router = express.Router();

//GET ALL DOCUMENTATION
router.get('/', getAllUsers);
router.post('/signup', createUser);
router.post('/login', loginUser);

export default router;