"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidation = void 0;
const schemas_1 = require("../joi/schemas");
const loginValidation = (req, res, next) => {
    const { body: { email, password } } = req;
    const { error } = schemas_1.loginSchema.validate({ email, password });
    if (error)
        return res.status(400).json({ message: error.message });
    next();
};
exports.loginValidation = loginValidation;
