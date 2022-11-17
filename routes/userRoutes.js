import express from 'express';
const userRouter = express.Router();
import {uploadProfileController} from '../controllers/userController.js'

userRouter.post('/profile/upload', uploadProfileController);

export default userRouter;