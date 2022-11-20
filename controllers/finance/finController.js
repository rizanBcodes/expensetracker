// import Transaction from ".../models/Transaction";

const getFinController = (req, res) => {
    //get finances from db
    return res.send(`transaction from db for ${req.params.activity}`)
}

const addFinController = async (req, res) => {
    //add transaction by id provided
    return res.send(`transaction added for ${req.params.activity}`);
};

const putFinController = (req, res) => {
    //update transaction by id provided
    return res.send(`transaction update in db for ${req.params.activity}`);
};

const delFinController = (req, res) => {
    //  delete transaction by id provided
    return res.send(`transaction deleted from db for ${req.params.activity}`);
};

export {getFinController, addFinController, putFinController, delFinController};