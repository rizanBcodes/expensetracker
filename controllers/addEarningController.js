import Transaction from "../models/Transaction.js";

const addEarningController =     (req, res) => {
    const transaction = new Transaction({
        "date": new Date(),
        "amount": req.body.amount,
        "detail": req.body.detail,
        "category": "earning"
    });

    transaction.save();
    res.send('earning added');
};

export default addEarningController;