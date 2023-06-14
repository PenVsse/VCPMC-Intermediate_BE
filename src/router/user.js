import express from 'express';
import { login } from '../controller/user';

const userRouter = express.Router();

userRouter.post('/login', login);

export default userRouter;
