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
Object.defineProperty(exports, "__esModule", { value: true });
var gastosType;
(function (gastosType) {
    gastosType[gastosType["alimentacao"] = 0] = "alimentacao";
    gastosType[gastosType["servico"] = 1] = "servico";
    gastosType[gastosType["investimento"] = 2] = "investimento";
    gastosType[gastosType["lazer"] = 3] = "lazer";
    gastosType[gastosType["educacao"] = 4] = "educacao";
})(gastosType || (gastosType = {}));
class GastosService {
    constructor() {
        this.insertGasto = () => __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.default = GastosService;
