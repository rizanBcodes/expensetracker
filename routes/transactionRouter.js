import express from "express";
import Transaction from "../models/Transaction.js";
// import User from "./models/User.js";
const transactionRouter = express.Router();

transactionRouter.get('/get-expenses',
    (req, res) => {
        Transaction.find({ category: "expense" }, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    })

transactionRouter.get('/get-earnings',
    (req, res) => {
        Transaction.find({ category: "earning" }, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    })

transactionRouter.post('/add-expense',
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

transactionRouter.post('/add-earning',
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


transactionRouter.get('/all',
    (req, res) => {
        Transaction.find({}, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    })

export default transactionRouter;