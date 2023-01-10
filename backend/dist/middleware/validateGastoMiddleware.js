"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gastoValidation = void 0;
const { gastoSchema } = require('../joi/schemas');
const gastoValidation = (req, res, next) => {
    const { body: { email, type, value } } = req;
    const { error } = gastoSchema.validate({ email, type, value });
    if (error)
        return res.status(400).json({ message: error.message });
    next();
};
exports.gastoValidation = gastoValidation;
