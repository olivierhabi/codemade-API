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
        createdUserId,
      });
    } catch (error) {
      throw error;
    }
    next();
  }
}

export default ChapterService;
