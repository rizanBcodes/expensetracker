// IMPORTS 
import express from "express";
import mongoose from "mongoose";
import transactionRouter from "./routes/transactionRouter.js";
import dotenv from 'dotenv';
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';
import requireAuth from "./middleware/requireAuth.js";
import cookieParser from 'cookie-parser'
import Transaction from "./models/Transaction.js";
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = process.env.PORT || 4000;
const app = express();

dotenv.config();

mongoose.connect(process.env.DB_CONNECTION_STRING,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    import multer from 'multer';

    var fileStorageEngine = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './images')
        },
        filename: function (req, file, cb) {
            cb(null, Date.now() + '--' + file.originalname)
        }
    })
    var upload = multer({ storage: fileStorageEngine });
    

// MIDDLEWARE
app.use(express.json());
app.use(cookieParser());
app.use(express.static(__dirname + '/uploads'));
app.use('/uploads', express.static('uploads'));

app.use('/api/transactions/', requireAuth, transactionRouter)
app.use('/api/auth/', authRouter)
app.use('/api/user/', requireAuth, upload.single('image'), userRouter)

app.get(
    '/testauth',
    requireAuth,
    async (req, res) => {

        const startDate = req.query.startDate;
        const endDate = req.query.endDate;

        if (startDate == undefined || endDate == undefined) {
            const filteredIfNoQuery = await Transaction.find({});
            return res.send(filteredIfNoQuery);
        }

        console.log(startDate, endDate);
        const filtered = await Transaction.find({ date: { $gt: new Date(startDate), $lt: new Date(endDate) } });
        console.log(filtered);
        res.send('secret');
    }
)

app.get(
    '*',
    () => {
        res.send({
            "message": "requested endpoint not found"
        })
    }
)

app.listen(port,
    () => {
        console.log(`listening on port ${port}`)
    });

