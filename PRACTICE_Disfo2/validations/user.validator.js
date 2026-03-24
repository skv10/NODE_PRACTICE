const Joi = require('joi');

const registerUserSchema = Joi.object({
    fullName: Joi.string().max(50).required(''),
    username: Joi.string().max(25).required(),
    email: Joi.string().email().required(),
});

module.exports = { registerUserSchema };
