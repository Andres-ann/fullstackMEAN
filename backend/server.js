import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRouter from './routes/productRoutes.js';

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use('/api/products', productRouter);

const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI

const start = async () => {
    try {
        connectDB(MONGO_URI);
        console.log('Mongodb database connected');
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`)
        });
    } catch (error) {
        console.log(`Error connection: ${error}`);
    }
}

start();