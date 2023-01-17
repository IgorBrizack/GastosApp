"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateGastoMiddleware_1 = require("../middleware/validateGastoMiddleware");
const gastoController_1 = __importDefault(require("../controller/gastoController"));
const validateJWT_1 = require("../middleware/validateJWT");
const validateGastoUpdateMiddleware_1 = require("../middleware/validateGastoUpdateMiddleware");
const gastoRouter = (0, express_1.Router)();
const gastoController = new gastoController_1.default();
gastoRouter.post('/gasto', validateJWT_1.validateJWT, validateGastoMiddleware_1.gastoValidation, gastoController.insert);
gastoRouter.get('/gasto/:email', validateJWT_1.validateJWT, gastoController.getGastosUser);
gastoRouter.get('/gasto/:email/list', validateJWT_1.validateJWT, gastoController.getGastosUserList);
gastoRouter.put('/gasto/:id', validateJWT_1.validateJWT, validateGastoUpdateMiddleware_1.gastoUpdateValidation, gastoController.updateGasto);
gastoRouter.delete('/gasto/:id', validateJWT_1.validateJWT, gastoController.deleteGasto);
exports.default = gastoRouter;
