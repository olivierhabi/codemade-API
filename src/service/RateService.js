import database from "../models";

class RateService {
  static async addRate(newRate, next) {
    const { rate, courseId, createdUserId } = newRate;
    try {
      return await database.Rating.create({
        rate,
        courseId,
        createdUserId
      });
    } catch (error) {
      throw error;
    }
    next();
  }
}

export default RateService;
