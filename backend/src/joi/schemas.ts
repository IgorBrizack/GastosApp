const Joi = require('joi');

const StringEmpty = 'Some required fields are missing';
const InvalidFields = 'Invalid fields';

export const loginSchema = Joi.object({
  email: Joi.string().required().email().messages({
    'string.empty': StringEmpty,
    'any.required': InvalidFields,
  }),
  password: Joi.string().required().min(8).messages({
    'string.empty': StringEmpty,
    'any.required': InvalidFields,
  }),
});

export const registerSchema = Joi.object({
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



