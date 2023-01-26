import { Router } from 'express'
import UserController from '../controller/userController'
import { validateJWT } from '../middleware/validateJWT'
import { loginValidation } from '../middleware/validateLoginMiddleware'
import { registerValidation } from '../middleware/validateRegisterMiddleware'

const userRouter = Router()

const userController = new UserController()

userRouter.post('/login', loginValidation, userController.login)
userRouter.post('/register', registerValidation, userController.register)
userRouter.get('/users', validateJWT, userController.users)

export default userRouter
