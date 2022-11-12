import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema(
    {
        date: Date,
        detail: String,
        amount: Number,
        category: String
    }
)

export default mongoose.model("Transaction", transactionSchema);
