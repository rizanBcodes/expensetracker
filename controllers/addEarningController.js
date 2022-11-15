import Transaction from "../models/Transaction.js";
import { requireAuth } from "../middleware/authMiddleware.js";

const addEarningController = (req, res) => {
    //  console.log(req.body.userId);
    const transaction = new Transaction({
        "date": new Date(),
        "amount": req.body.amount,
        "detail": req.body.detail,
        "category": "earning",
        "user": req.body.userId
    });

    transaction.save();
    res.send('earning added');
};

export default addEarningController;