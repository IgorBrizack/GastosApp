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
const User_1 = require("../database/models/User");
const ErrorWithStatus_1 = __importDefault(require("../helpers/ErrorWithStatus"));
const bcrypt = __importStar(require("bcryptjs"));
const generateToken_1 = __importDefault(require("../token/generateToken"));
class UserService {
    constructor(generateToken = new generateToken_1.default()) {
        this.generateToken = generateToken;
        this.loginService = (email, password) => __awaiter(this, void 0, void 0, function* () {
            const userData = yield User_1.User.findOne({ where: { email } });
            if (!userData)
                throw new ErrorWithStatus_1.default('User not found', 400);
            if (userData && (yield bcrypt.compare(password, userData.password))) {
                const { email, role, username } = userData;
                const token = this.generateToken.generate({ email, role });
                return { token, email, role, username };
            }
            if (!userData)
                throw new ErrorWithStatus_1.default('User not found', 400);
        });
        this.registerService = (user) => __awaiter(this, void 0, void 0, function* () {
            const { username, email, passwordCryptography, role } = user;
            const hasUser = yield this.getByEmail(email);
            if (!hasUser) {
                yield User_1.User.create({ username, email, password: passwordCryptography, role });
                return;
            }
            throw new ErrorWithStatus_1.default('User already registered!', 409);
        });
        this.getByEmail = (email) => __awaiter(this, void 0, void 0, function* () {
            const [userByEmail] = yield User_1.User.findAll({ where: { email } });
            if (userByEmail)
                return true;
            return false;
        });
        this.usersList = () => __awaiter(this, void 0, void 0, function* () {
            const usersList = yield User_1.User.findAll({
                attributes: { exclude: ['password'] }
            });
            return usersList;
        });
        this.delete = (email) => __awaiter(this, void 0, void 0, function* () {
            yield User_1.User.destroy({ where: { email } });
        });
        this.update = (id, body) => __awaiter(this, void 0, void 0, function* () {
            const { username, role, email } = body;
            yield User_1.User.update({ username, role, email }, { where: { id } });
        });
    }
}
exports.default = UserService;
