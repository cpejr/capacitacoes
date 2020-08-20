const { Segments, Joi } = require('celebrate');

const sessionValidator = new Object();

sessionValidator.create = {
    [Segments.BODY]: Joi.object().keys({
        name: Joi.array().required(),
        password: Joi.array().required(),
    })
}

sessionValidator.validate = {
    [Segments.HEADERS]: Joi.object().keys({
        authorization: Joi.string().required(),
    })
}

module.exports = sessionValidator;