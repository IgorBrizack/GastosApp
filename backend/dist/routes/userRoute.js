"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../controller/userController"));
const validateJWT_1 = require("../middleware/validateJWT");
const validateLoginMiddleware_1 = require("../middleware/validateLoginMiddleware");
const validateRegisterMiddleware_1 = require("../middleware/validateRegisterMiddleware");
const userRouter = (0, express_1.Router)();
const userController = new userController_1.default();
userRouter.post('/login', validateLoginMiddleware_1.loginValidation, userController.login);
userRouter.post('/register', validateRegisterMiddleware_1.registerValidation, userController.register);
userRouter.get('/users', validateJWT_1.validateJWT, userController.users);
userRouter.delete('/users/:email', validateJWT_1.validateJWT, userController.deleteUser);
exports.default = userRouter;
