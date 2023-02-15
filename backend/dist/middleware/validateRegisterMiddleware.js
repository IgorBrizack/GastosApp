"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerValidation = void 0;
const schemas_1 = require("../joi/schemas");
const registerValidation = (req, res, next) => {
    const { body: { email, password, username, role } } = req;
    const { error } = schemas_1.registerSchema.validate({ email, password, username, role });
    if (error)
        return res.status(400).json({ message: error.message });
    next();
};
exports.registerValidation = registerValidation;
