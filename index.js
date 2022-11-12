// IMPORTS 
import express from "express";
import mongoose from "mongoose";
import transactionRouter from "./routes/transactionRouter.js";
import dotenv from 'dotenv';

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
app.use('/api/transactions/', transactionRouter)


app.listen(port,
    () => {
        console.log(`listening on port ${port}`)
    });






