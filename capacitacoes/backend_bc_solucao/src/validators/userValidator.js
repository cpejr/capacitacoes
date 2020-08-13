const { Segments, Joi } = require('celebrate');

const userValidator = new Object();

userValidator.create = {
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        password: Joi.string().required(),
        type: Joi.string().valid("teacher", "student").required(),
    })
}

userValidator.update = {
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.string().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().optional(),
        password: Joi.string().optional(),
        type: Joi.string().valid("teacher", "student").optional(),
    })
}

userValidator.delete = {
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.string().required(),
    })
}

module.exports = userValidator;