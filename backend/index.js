import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Application is running fine')
});

app.listen(PORT, () => {
  connectDB();
  console.log(`App is running on http://localhost:${PORT}`);
});