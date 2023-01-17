"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gastosDefault = void 0;
const gastoInterface_1 = require("../interfaces/gastoInterface");
const gastosDefault = (email) => {
    const defaultValues = [
        {
            type: gastoInterface_1.gastosType.alimentacao,
            email: email,
            value: 0,
            date: '0000/00/00'
        },
        {
            type: gastoInterface_1.gastosType.educacao,
            email: email,
            value: 0,
            date: '0000/00/00'
        },
        {
            type: gastoInterface_1.gastosType.investimento,
            email: email,
            value: 0,
            date: '0000/00/00'
        },
        {
            type: gastoInterface_1.gastosType.lazer,
            email: email,
            value: 0,
            date: '0000/00/00'
        },
        {
            type: gastoInterface_1.gastosType.servico,
            email: email,
            value: 0,
            date: '0000/00/00'
        }
    ];
    return defaultValues;
};
exports.gastosDefault = gastosDefault;
