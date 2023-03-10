"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const userService_1 = __importDefault(require("../service/userService"));
const bcrypt = __importStar(require("bcryptjs"));
const gastosService_1 = __importDefault(require("../service/gastosService"));
const gastosDefault_1 = require("../helpers/gastosDefault");
const saltRounds = 10;
class UserController {
    constructor(userService = new userService_1.default(), gastosService = new gastosService_1.default()) {
        this.userService = userService;
        this.gastosService = gastosService;
        this.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            const userData = yield this.userService.loginService(email, password);
            res.status(201).json(userData);
        });
        this.register = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { username, email, password, role } = req.body;
            const passwordCryptography = yield bcrypt.hash(password, saltRounds);
            yield this.userService.registerService({ username, email, passwordCryptography, role });
            const defaultValues = (0, gastosDefault_1.gastosDefault)(email);
            const values = defaultValues.map((el) => __awaiter(this, void 0, void 0, function* () { return yield this.gastosService.insertGasto(el); }));
            yield Promise.all(values);
            res.status(201).json({ message: 'Created' });
        });
        this.users = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const usersList = yield this.userService.usersList();
            res.status(200).json(usersList);
        });
        this.deleteUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { email } = req.params;
            yield this.userService.delete(email);
            res.status(200).json({ message: 'Deleted' });
        });
        this.updateUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { username, email, role } = req.body;
            yield this.userService.update(Number(id), { username, email, role });
            res.status(201).json({ message: 'Updated' });
        });
    }
}
exports.default = UserController;
