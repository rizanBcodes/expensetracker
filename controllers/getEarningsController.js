import Transaction from "../models/Transaction.js";

const getEarningsController = (req, res) => {
    Transaction.find({ category: "earning", user: req.body.userId }, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
};

export default getEarningsController;