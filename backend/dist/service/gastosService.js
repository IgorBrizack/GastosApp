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
const User_1 = require("../database/models/User");
const Gasto_1 = require("../database/models/Gasto");
const index_1 = __importDefault(require("../database/models/index"));
class GastosService {
    constructor() {
        this.getUserId = (email) => __awaiter(this, void 0, void 0, function* () {
            const userData = yield User_1.User.findOne({ where: { email } });
            const { id } = userData;
            return id;
        });
        this.insertGasto = (data) => __awaiter(this, void 0, void 0, function* () {
            const { email, type, value, date } = data;
            const id = yield this.getUserId(email);
            yield Gasto_1.Gasto.create({ userId: Number(id), type, value, gastoDate: date });
        });
        this.getAllGastosFromUser = (email) => __awaiter(this, void 0, void 0, function* () {
            const id = yield this.getUserId(email);
            const QUERY = `SELECT user_id, type, SUM(value) as value FROM gastos_app_db.gastos
    WHERE (user_id = ${id}) 
    AND (type = 'alimentacao' OR type = 'servico' OR type = 'investimento' OR type = 'lazer' OR type = 'educacao')
    GROUP BY user_id, type`;
            const [result] = yield index_1.default.query(QUERY);
            return result;
        });
        this.getGastoListFromUser = (email) => __awaiter(this, void 0, void 0, function* () {
            const id = yield this.getUserId(email);
            const result = yield Gasto_1.Gasto.findAll({ where: { user_id: id } });
            return result;
        });
        this.update = (id, body) => __awaiter(this, void 0, void 0, function* () {
            const { value, type, date } = body;
            yield Gasto_1.Gasto.update({ value, type, gastoDate: date }, { where: { id } });
        });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            yield Gasto_1.Gasto.destroy({ where: { id } });
        });
    }
}
exports.default = GastosService;
