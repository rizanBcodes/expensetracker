import Transaction from "../models/Transaction.js";

const getExpensesController = (req, res) => {
    Transaction.find({ category: "expense", user: req.body.userId }, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
};

export default getExpensesController;