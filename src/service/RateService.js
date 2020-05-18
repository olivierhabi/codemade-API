import database from "../models";

class RateService {
  static async addRate(newRate, next) {
    const { rate, commentRate, name, courseId, createdUserId } = newRate;
    try {
      return await database.Rating.create({
        rate,
        commentRate,
        name,
        courseId,
        createdUserId,
      });
    } catch (error) {
      throw error;
    }
    next();
  }

  static async getAllRate(id, next) {
    try {
      return await database.Rating.findAll({
        where: { courseId: id },
      });
    } catch (error) {
      throw error;
    }
    next();
  }
}

export default RateService;
