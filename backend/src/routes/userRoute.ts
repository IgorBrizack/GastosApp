import { Router } from 'express';
import UserController from '../controller/userController';
import { loginValidation } from '../middleware/validateLoginMiddleware';
import { registerValidation } from '../middleware/validateRegisterMiddleware';

const userRouter = Router();

const userController = new UserController();

userRouter.post('/login', loginValidation, userController.login)
userRouter.post('/register', registerValidation, userController.register)

export default userRouter