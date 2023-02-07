"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gastoUpdateValidation = void 0;
const schemas_1 = require("../joi/schemas");
const gastoUpdateValidation = (req, res, next) => {
    const { body: { type, value, date } } = req;
    const { error } = schemas_1.gastoUpdateSchema.validate({ type, value, date });
    if (error)
        return res.status(400).json({ message: error.message });
    next();
};
exports.gastoUpdateValidation = gastoUpdateValidation;
