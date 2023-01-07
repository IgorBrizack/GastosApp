"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = require("express");
const userController_1 = __importDefault(require("../controller/userController"));
const validateLoginMiddleware_1 = require("../middleware/validateLoginMiddleware");
const userRouter = (0, express_1.Router)();
const userController = new userController_1.default();
const options = {
    origin: process.env.WEB_HOST
};
userRouter.use((0, cors_1.default)(options));
userRouter.post('/login', validateLoginMiddleware_1.loginValidation, userController.login);
exports.default = userRouter;
