import database from "../models";

class CommentService {
  static async addComment(newModule, next) {
    const { comment, courseId, createdUserId } = newModule;
    try {
      return await database.Comments.create({
        comment,
        courseId,
        createdUserId
      });
    } catch (error) {
      throw error;
    }
    next();
  }

  static async getComment(id, next) {
    try {
      return await database.Comments.findOne({
        where: { id }
      });
    } catch (error) {
      throw error;
    }
    next();
  }

  static async getAllComment(id, next) {
    try {
      return await database.Comments.findAll({
        where: {
          courseId: id
        }
      });
    } catch (error) {
      throw error;
    }
    next();
  }
}

export default CommentService;
