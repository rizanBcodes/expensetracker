import Transaction from "../models/Transaction.js";

//we have a requireValidCategory middleware that checks for invalid queries in category
//that means, we only get earning or expense as category, so we can avoid code duplication

//need to include this inside getFinController later
const allFinController = (req, res) => {
    Transaction.find({ user: req.body.userId }, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
}

const getFinController = (req, res) => {

    //need to redefine category for some reason
    const category = req.params.category;

    //get transaction from db by category: earning | expense
    Transaction.find({ category: category, user: req.body.userId }, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
}

const addFinController = async (req, res) => {

    const category = req.params.category;

    //create transaction in db by category: earning | expense
    const transaction = await Transaction.create({
        "date": new Date(),
        "amount": req.body.amount,
        "detail": req.body.detail,
        "category": category,
        "user": req.body.userId
    });
    res.send(`transaction added in category: ${category}`);

};

const putFinController = async (req, res) => {
    //update transaction
    return res.send(`transaction update in db for ${req.params.activity}`);
};

const delFinController = (req, res) => {
    //delete transaction by id provided
    return res.send(`transaction deleted from db for ${req.params.activity}`);
};

export { allFinController, getFinController, addFinController, putFinController, delFinController };