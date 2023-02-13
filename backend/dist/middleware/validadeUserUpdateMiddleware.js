"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userUpdateValidation = void 0;
const schemas_1 = require("../joi/schemas");
const userUpdateValidation = (req, res, next) => {
    const { body: { email, username, role } } = req;
    const { error } = schemas_1.userUpdateSchema.validate({ email, username, role });
    if (error)
        return res.status(400).json({ message: error.message });
    next();
};
exports.userUpdateValidation = userUpdateValidation;
