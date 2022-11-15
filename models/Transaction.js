import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema(
    {
        date: Date,
        detail: String,
        amount: Number,
        category: String,
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }
)

export default mongoose.model("Transaction", transactionSchema);
