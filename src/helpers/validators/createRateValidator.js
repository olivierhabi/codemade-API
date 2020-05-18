import Joi from "joi";
import "@babel/polyfill";

const validateRate = {
  async validate(req, res, next) {
    const schema = Joi.object().keys({
      rate: Joi.number().integer().max(5).required(),
      courseId: Joi.number().integer().max(255).required(),
      commentRate: Joi.string().max(1024).required(),
      name: Joi.string().max(1024).required(),
    });
    const { value, error } = Joi.validate(req.body, schema);
    if (error && error.details) {
      return res
        .status(400)
        .send({ status: 400, message: error.details[0].message });
    }
    next();
  },
};

export default validateRate;
