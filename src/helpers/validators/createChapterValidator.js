import Joi from "joi";
import "@babel/polyfill";

const validateChapter = {
  async validate(req, res, next) {
    const schema = Joi.object().keys({
      title: Joi.string()
        .trim()
        .min(6)
        .required(),
      body: Joi.string()
        .trim()
        .min(6)
        .required(),
      courseId: Joi.number()
        .integer()
        .required(),
      moduleId: Joi.number()
        .integer()
        .required()
    });
    const { value, error } = Joi.validate(req.body, schema);
    if (error && error.details) {
      return res
        .status(400)
        .send({ status: 400, message: error.details[0].message });
    }
    next();
  }
};

export default validateChapter;
