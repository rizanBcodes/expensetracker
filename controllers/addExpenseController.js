import Transaction from "../models/Transaction.js";
import { requireAuth } from "../middleware/authMiddleware.js";

const addExpenseController =     (req, res) => {
    const transaction = new Transaction({
        "date": new Date(),
        "amount": req.body.amount,
        "detail": req.body.detail,
        "category": "expense",
        "user": req.body.userId
    });
    transaction.save();

    res.send('expense added');
};

export default addExpenseController;