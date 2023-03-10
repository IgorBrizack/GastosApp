import { Router } from 'express'
import UserController from '../controller/userController'
import { validateJWT } from '../middleware/validateJWT'
import { loginValidation } from '../middleware/validateLoginMiddleware'
import { registerValidation } from '../middleware/validateRegisterMiddleware'
import { userUpdateValidation } from '../middleware/validadeUserUpdateMiddleware'

const userRouter = Router()

const userController = new UserController()

userRouter.post('/login', loginValidation, userController.login)
userRouter.post('/register', registerValidation, userController.register)
userRouter.get('/users', validateJWT, userController.users)
userRouter.delete('/users/:email', validateJWT, userController.deleteUser)
userRouter.put('/users/update/:id', validateJWT, userUpdateValidation, userController.updateUser)

export default userRouter
