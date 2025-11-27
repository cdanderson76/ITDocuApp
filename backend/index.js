import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import router from './routes/userRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use('/api/user', router);

app.listen(PORT, () => {
  connectDB();
  console.log(`App is running on http://localhost:${PORT}`);
});