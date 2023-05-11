const Joi = require('joi');

const loginSchema = Joi.object({
    email: Joi.string().email().required().messages({
    'string.empty': 'Some required fields are missing',
    'any.required': 'Invalid fields',
    }),
    password: Joi.string().required().messages({
    'string.empty': 'Some required fields are missing',
    'any.required': 'Invalid fields',
    }),
});

const userSchema = Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    image: Joi.string(),
});

const categorySchema = Joi.object({
    name: Joi.string().min(2).required(),
});

const postSchema = Joi.object({
    title: Joi.string().min(2).required().messages({
        'string.empty': 'Some required fields are missing',
    }),
    content: Joi.string().min(5).required().messages({
        'string.empty': 'Some required fields are missing',
    }),
    categoryIds: Joi.array().required(),
});

module.exports = {
    loginSchema,
    userSchema,
    categorySchema,
    postSchema,
};