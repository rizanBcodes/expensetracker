import Transaction from "../models/Transaction.js";

const addExpenseController =     (req, res) => {
    const transaction = new Transaction({
        "date": new Date(),
        "amount": req.body.amount,
        "detail": req.body.detail,
        "category": "expense"
    });
    transaction.save();

    res.send('expense added');
};

export default addExpenseController;