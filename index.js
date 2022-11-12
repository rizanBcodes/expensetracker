// IMPORTS 
import express from "express";
import mongoose from 'mongoose';
import Transaction from "./models/Transaction.js";
// import User from "./models/User.js";
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

app.get('/api/get-expenses',
    (req, res) => {
        Transaction.find({ category: "expense" }, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    })

app.get('/api/get-earnings',
    (req, res) => {
        Transaction.find({ category: "earning" }, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    })

app.post('/api/add-expense',
    (req, res) => {
        const transaction = new Transaction({
            "date": new Date(),
            "amount": req.body.amount,
            "detail": req.body.detail,
            "category": "expense"
        });
        transaction.save();

        res.send('earning added');
    })

app.post('/api/add-earning',
    (req, res) => {
        const transaction = new Transaction({
            "date": new Date(),
            "amount": req.body.amount,
            "detail": req.body.detail,
            "category": "earning"
        });

        transaction.save();
        res.send('earning added');
    })


app.get('/api/get-transactions',
    (req, res) => {
        Transaction.find({}, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    })

app.get('*',
    (req, res) => {
        res.send('root route');
    })

app.listen(port,
    () => {
        console.log(`listening on port ${port}`)
    });






