"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSchema = exports.loginSchema = void 0;
const Joi = require('joi');
const StringEmpty = 'Some required fields are missing';
const InvalidFields = 'Invalid fields';
exports.loginSchema = Joi.object({
    email: Joi.string().required().email().messages({
        'string.empty': StringEmpty,
        'any.required': InvalidFields,
    }),
    password: Joi.string().required().min(8).messages({
        'string.empty': StringEmpty,
        'any.required': InvalidFields,
    }),
});
exports.registerSchema = Joi.object({
    email: Joi.string().required().email().messages({
        'string.empty': StringEmpty,
        'any.required': InvalidFields,
    }),
    password: Joi.string().required().min(8).messages({
        'string.empty': StringEmpty,
        'any.required': InvalidFields,
    }),
    username: Joi.string().required().min(12).messages({
        'string.empty': StringEmpty,
        'any.required': InvalidFields,
    }),
    role: Joi.string().required(),
});
