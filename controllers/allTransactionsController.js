import Transaction from "../models/Transaction.js";
import { requireAuth } from "../middleware/authMiddleware.js";

const allTransactionsController = (req,res) => {
    Transaction.find({user: req.body.userId}, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
};

export default allTransactionsController;