import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import router from './routes/userRoutes.js';
import docRouter from './routes/docRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/user', router);
app.use('/api/doc', docRouter);

app.listen(PORT, () => {
  connectDB();
  console.log(`App is running on http://localhost:${PORT}`);
});