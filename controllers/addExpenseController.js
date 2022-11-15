import Transaction from "../models/Transaction.js";
import { requireAuth } from "../middleware/authMiddleware.js";

const addExpenseController = async (req, res) => {
    const transaction = await Transaction.create({
        "date": new Date(),
        "amount": req.body.amount,
        "detail": req.body.detail,
        "category": "expense",
        "user": req.body.userId
    });

    res.send('expense added');
};

export default addExpenseController;