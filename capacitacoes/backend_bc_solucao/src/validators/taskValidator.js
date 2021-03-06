const { Segments, Joi } = require("celebrate");

const taskValidator = new Object();

taskValidator.create = {
  [Segments.HEADERS]: Joi.object()
    .keys({
      authorization: Joi.string().required(),
    })
    .unknown(),
  [Segments.BODY]: Joi.object().keys({
    subject: Joi.string().required(),
    text: Joi.string().required(),
  }),
  [Segments.PARAMS]: Joi.object().keys({
    classId: Joi.string().required(),
  }),
};

taskValidator.read = {
  [Segments.HEADERS]: Joi.object()
    .keys({
      authorization: Joi.string().required(),
    })
    .unknown(),
};

taskValidator.update = {
  [Segments.HEADERS]: Joi.object()
    .keys({
      authorization: Joi.string().required(),
    })
    .unknown(),
  [Segments.PARAMS]: Joi.object().keys({
    taskId: Joi.string().required(),
  }),
  [Segments.BODY]: Joi.object().keys({
    subject: Joi.string().optional(),
    text: Joi.string().optional(),
    imageId: Joi.string().optional(),
  }),
};

taskValidator.delete = {
  [Segments.HEADERS]: Joi.object()
    .keys({
      authorization: Joi.string().required(),
    })
    .unknown(),
  [Segments.PARAMS]: Joi.object().keys({
    taskId: Joi.string().required(),
  }),
};

module.exports = taskValidator;
