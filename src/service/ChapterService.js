import database from "../models";

class ChapterService {
  static async addChapter(newChapter, next) {
    const { title, body, courseId, moduleId, createdUserId } = newChapter;
    try {
      return await database.Chapter.create({
        title,
        body,
        courseId,
        moduleId,
        createdUserId
      });
    } catch (error) {
      throw error;
    }
    next();
  }

  static async getChapters(data, next) {
    const { moduleId, courseId } = data;

    try {
      return await database.Chapter.findAll({
        where: {
          moduleId,
          courseId
        }
      });
    } catch (error) {
      throw error;
    }
    next();
  }

  static async getOneChapter(id, next) {
    try {
      return await database.Chapter.findOne({
        where: {
          id
        }
      });
    } catch (error) {
      throw error;
    }
    next();
  }
}

export default ChapterService;
