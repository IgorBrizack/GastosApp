"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __importDefault(require("./App"));
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3001;
App_1.default.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
