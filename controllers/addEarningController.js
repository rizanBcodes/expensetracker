import Transaction from "../models/Transaction.js";
import { requireAuth } from "../middleware/authMiddleware.js";

const addEarningController = async (req, res) => {
    //  console.log(req.body.userId);
    const transaction = await Transaction.create({
        "date": new Date(),
        "amount": req.body.amount,
        "detail": req.body.detail,
        "category": "earning",
        "user": req.body.userId
    });
    
    res.send('earning added');
};

export default addEarningController;