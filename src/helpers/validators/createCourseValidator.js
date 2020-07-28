import Joi from "joi";
import "@babel/polyfill";

const validateUser = {
  async validate(req, res, next) {
    const schema = Joi.object().keys({
      title: Joi.string().trim().min(6).max(255).required(),
      body: Joi.string().trim().min(6).max(1024).required(),
      courseType: Joi.string().trim().min(6).max(1024).required(),
      features: Joi.array().required(),
      price: Joi.number().integer().required(),
    });
    const { title, body, courseType, features, price } = req.body;
    const FeatureArray = Array.isArray(features) ? features : [features];

    const courseObject = {
      title: title,
      body: body,
      courseType: courseType,
      features: FeatureArray,
      price: price,
    };

    const { value, error } = Joi.validate(courseObject, schema);
    req.courseData = courseObject;
    if (error && error.details) {
      return res
        .status(400)
        .send({ status: 400, message: error.details[0].message });
    }
    next();
  },
};

export default validateUser;
