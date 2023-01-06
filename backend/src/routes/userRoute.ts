import cors from 'cors';
import { Router } from 'express';
import UserController from '../controller/userController';
import { loginValidation } from '../middleware/validateLoginMiddleware';

const userRouter = Router();

const userController = new UserController();

const options: cors.CorsOptions = {
  origin: process.env.WEB_HOST
};

userRouter.use(cors(options));

userRouter.post('/login', loginValidation, userController.login)

export default userRouter