"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
class GenerateToken {
    constructor() {
        this.generate = (userData) => {
            var _a;
            const { email, role } = userData;
            const secret = (_a = process.env.JWT_SECRET) !== null && _a !== void 0 ? _a : 'meusegredoguardado';
            const jwtConfig = {
                algorithm: 'HS256'
            };
            const token = jsonwebtoken_1.default.sign({ data: { email, role } }, secret, jwtConfig);
            return token;
        };
    }
}
exports.default = GenerateToken;
