import express from "express";
import addEarningController from "../controllers/addEarningController.js";
import addExpenseController from "../controllers/addExpenseController.js";
import allTransactionsController from "../controllers/allTransactionsController.js";
import getEarningsController from "../controllers/getEarningsController.js";
import getExpensesController from "../controllers/getExpensesController.js";
import Transaction from "../models/Transaction.js";
// import User from "./models/User.js";
const transactionRouter = express.Router();

transactionRouter.get('/get-expenses', getExpensesController);
transactionRouter.get('/get-earnings', getEarningsController);
transactionRouter.post('/add-expense', addExpenseController);
transactionRouter.post('/add-earning', addEarningController);
transactionRouter.get('/all', allTransactionsController);

export default transactionRouter;