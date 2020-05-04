import database from "../models";

class ModuleService {
  static async addModule(newModule, next) {
    const { title, body, courseId, createdUserId } = newModule;
    try {
      return await database.Module.create({
        title,
        body,
        courseId,
        createdUserId,
      });
    } catch (error) {
      throw error;
    }
    next();
  }
}

export default ModuleService;
