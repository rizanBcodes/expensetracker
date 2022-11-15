// IMPORTS 
import express from "express";
import mongoose from "mongoose";
import transactionRouter from "./routes/transactionRouter.js";
import dotenv from 'dotenv';
import authRouter from './routes/authRoutes.js'
import { requireAuth, checkUser } from "./middleware/authMiddleware.js";
import cookieParser from 'cookie-parser'
dotenv.config();

const port = process.env.PORT || 4000;
const app = express();

mongoose.connect(process.env.DB_CONNECTION_STRING,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

// MIDDLEWARE
app.use(express.json());
app.use(cookieParser());
app.use('/api/transactions/', transactionRouter)
app.use('/api/auth/', authRouter)

app.get('/protected', requireAuth, (req, res) => { res.send('inside protected route'); })

app.get(
    '*',
    () => {
        console.log(`caught by unmatched routes`)
    }
)

app.listen(port,
    () => {
        console.log(`listening on port ${port}`)
    });

