import express from "express";
import {getFinController, addFinController, putFinController, delFinController, allFinController } from "../controllers/finController.js";
import requireValidCategory from "../middleware/requireValidCategory.js";
const finRouter = express.Router();

finRouter.get('/', allFinController);
finRouter.get('/:category', requireValidCategory, getFinController);
finRouter.post('/:category', requireValidCategory, addFinController);
finRouter.put('/:transId', putFinController);
finRouter.delete('/:transId', delFinController);

export default finRouter;