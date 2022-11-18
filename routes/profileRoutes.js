import express from 'express';
const profileRouter = express.Router();
import {uploadProfileController} from '../controllers/uploadProfileController.js'

profileRouter.post('/profile/upload', uploadProfileController);

export default profileRouter;