// IMPORTS 
import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import authRouter from './routes/authRoutes.js';
import profileRouter from './routes/profileRoutes.js';
import requireAuth from "./middleware/requireAuth.js";
import cookieParser from 'cookie-parser'
import Transaction from "./models/Transaction.js";
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import finRouter from "./routes/finRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = process.env.PORT || 4000;
const app = express();

dotenv.config();

const connectToDatabase = async () => {
    await mongoose.connect(process.env.DB_CONNECTION_STRING,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(
            () => {
                console.log('connection to database')
            }
        )
        .catch(
            err => {
                console.error(err);
            }
        )
}
connectToDatabase();

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

app.use('/api/auth/', authRouter)
app.use('/api/user/', requireAuth, upload.single('image'), profileRouter)
app.use('/api/finance/', requireAuth, finRouter);

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
    (req, res) => {
        res.send({
            "message": "requested endpoint not found"
        })
    }
)

app.listen(port,
    () => {
        console.log(`listening on port ${port}`)
    });

