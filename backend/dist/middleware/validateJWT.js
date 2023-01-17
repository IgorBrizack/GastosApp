"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateJWT = void 0;
const jwt = require('jsonwebtoken');
require('dotenv').config();
const validateJWT = (req, res, next) => {
    const { headers: { authorization } } = req;
    try {
        jwt.verify(authorization, process.env.JWT_SECRET);
        return next();
    }
    catch (error) {
        return res.status(403).json({ message: 'Invalid Jwt' });
    }
};
exports.validateJWT = validateJWT;
