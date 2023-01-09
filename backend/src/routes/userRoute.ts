import { Router } from 'express';
import UserController from '../controller/userController';
import { loginValidation } from '../middleware/validateLoginMiddleware';

const userRouter = Router();

const userController = new UserController();

userRouter.post('/login', loginValidation, userController.login)
userRouter.post('/register', loginValidation, userController.register)

export default userRouter