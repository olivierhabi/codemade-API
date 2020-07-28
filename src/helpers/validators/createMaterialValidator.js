import Joi from "joi";
import "@babel/polyfill";

const validateMaterial = {
  async validate(req, res, next) {
    const schema = Joi.object().keys({
      description: Joi.string().trim().min(6).required(),

      courseId: Joi.number().integer().max(255).required(),
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

export default validateMaterial;
