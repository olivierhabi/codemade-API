import Joi from "joi";
import "@babel/polyfill";

const validateUser = {
  async validate(req, res, next) {
    const schema = Joi.object().keys({
      title: Joi.string().trim().min(6).max(255).required(),
      body: Joi.string().trim().min(6).max(1024).required(),
      courseType: Joi.string().trim().min(6).max(1024).required(),
      imageUrl: Joi.string().trim().min(6).required(),
      features: Joi.string().required(),
      price: Joi.number().integer().required(),
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

export default validateUser;
