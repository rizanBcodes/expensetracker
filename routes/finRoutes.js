import express from "express";
import {getFinController, addFinController, putFinController, delFinController } from "../controllers/finance/finController.js";

const finRouter = express.Router();

finRouter.get('/:activity', getFinController)
finRouter.post('/:activity', addFinController);
finRouter.put('/:activity', putFinController);
finRouter.delete('/:activity', delFinController);

export default finRouter;