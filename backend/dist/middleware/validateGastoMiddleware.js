"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gastoValidation = void 0;
const schemas_1 = require("../joi/schemas");
const gastoValidation = (req, res, next) => {
    const { body: { email, type, value, date } } = req;
    const { error } = schemas_1.gastoSchema.validate({ email, type, value, date });
    if (error)
        return res.status(400).json({ message: error.message });
    next();
};
exports.gastoValidation = gastoValidation;
