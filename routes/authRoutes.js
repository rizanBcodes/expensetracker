import express from 'express';
const authRouter = express.Router();
import {signup_post, login_post, logout_get} from '../controllers/authController.js';

authRouter.post('/signup', signup_post);
authRouter.post('/login', login_post);
authRouter.get('/logout', logout_get);

export default authRouter;