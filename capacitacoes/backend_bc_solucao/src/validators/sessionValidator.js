const { Segments, Joi } = require("celebrate");

const sessionValidator = new Object();

sessionValidator.create = {
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

sessionValidator.validate = {
  [Segments.HEADERS]: Joi.object().keys({
    authorization: Joi.string().required(),
  }).unknown(),
};

module.exports = sessionValidator;
