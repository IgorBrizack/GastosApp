import { Router } from 'express';
import { gastoValidation } from '../middleware/validateGastoMiddleware';
import GastoController from '../controller/gastoController';
import { validateJWT } from '../middleware/validateJWT';

const gastoRouter = Router();

const gastoController = new GastoController();

gastoRouter.post('/gasto',validateJWT, gastoValidation, gastoController.insert)
gastoRouter.get('/gasto/:email', validateJWT, gastoController.getGastosUser)
gastoRouter.get('/gasto/:email/list', validateJWT, gastoController.getGastosUserList)

export default gastoRouter