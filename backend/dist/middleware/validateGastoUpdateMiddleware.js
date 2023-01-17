"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gastoUpdateValidation = void 0;
const { gastoUpdateSchema } = require('../joi/schemas');
const gastoUpdateValidation = (req, res, next) => {
    const { body: { type, value, date } } = req;
    const { error } = gastoUpdateSchema.validate({ type, value, date });
    if (error)
        return res.status(400).json({ message: error.message });
    next();
};
exports.gastoUpdateValidation = gastoUpdateValidation;
