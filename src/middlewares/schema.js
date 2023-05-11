const Joi = require('joi');

const msg = 'Some required fields are missing';

const loginSchema = Joi.object({
    email: Joi.string().email().required().messages({
    'string.empty': msg,
    'any.required': 'Invalid fields',
    }),
    password: Joi.string().required().messages({
    'string.empty': msg,
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
        'string.empty': msg,
    }),
    content: Joi.string().min(5).required().messages({
        'string.empty': msg,
    }),
    categoryIds: Joi.array().required(),
});

const updateSchema = Joi.object({
    title: Joi.string().min(2).required().messages({
        'string.empty': msg,
    }),
    content: Joi.string().min(5).required().messages({
        'string.empty': msg,
    }),
});

module.exports = {
    loginSchema,
    userSchema,
    categorySchema,
    postSchema,
    updateSchema,
};