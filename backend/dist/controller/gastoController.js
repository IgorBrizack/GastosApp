"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gastosService_1 = __importDefault(require("../service/gastosService"));
class GastoController {
    constructor(gastoService = new gastosService_1.default()) {
        this.gastoService = gastoService;
        this.insert = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { email, type, value, date } = req.body;
            yield this.gastoService.insertGasto({ email, type, value, date });
            return res.status(201).json({ message: 'inserido' });
        });
        this.getGastosUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { email } = req.params;
            try {
                const gastos = yield this.gastoService.getAllGastosFromUser(email);
                return res.status(200).json(gastos);
            }
            catch (error) {
                return res.status(400).json({ message: 'Not found' });
            }
        });
        this.getGastosUserList = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { email } = req.params;
            try {
                const gastos = yield this.gastoService.getGastoListFromUser(email);
                res.status(200).json(gastos);
            }
            catch (error) {
                res.status(400).json({ message: 'Not found' });
            }
        });
        this.updateGasto = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { body } = req;
            yield this.gastoService.update(id, body);
            res.status(201).json({ message: 'Updated' });
        });
        this.deleteGasto = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield this.gastoService.delete(id);
            res.status(201).json({ message: 'Deleted' });
        });
        this.getAllGastos = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const allGasto = yield this.gastoService.allGasto();
            res.status(201).json(allGasto);
        });
        this.getAllGastosWithDate = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const allGastoWithDate = yield this.gastoService.allGastoWithDate();
            res.status(201).json(allGastoWithDate);
        });
    }
}
exports.default = GastoController;
