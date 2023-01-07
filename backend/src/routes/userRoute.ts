import { Router } from 'express';
import UserController from '../controller/userController';
import { loginValidation } from '../middleware/validateLoginMiddleware';

const userRouter = Router();

const userController = new UserController();

userRouter.post('/login', loginValidation, userController.login)

export default userRouter