const { Segments, Joi } = require('celebrate');

const classValidator = new Object();

classValidator.create = {
    [Segments.BODY]: Joi.object().keys({
        responsible: Joi.string().required(),
        students: Joi.array().optional(),
        tests: Joi.array().optional(),
    })
}

classValidator.update = {
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.string().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
        responsible: Joi.string().optional(),
        students: Joi.array().optional(),
        tests: Joi.array().optional(),
    })
}

classValidator.delete = {
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.string().required(),
    })
}

module.exports = classValidator;