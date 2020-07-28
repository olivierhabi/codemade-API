import database from "../models";

class ModuleService {
  static async addModule(newModule, next) {
    const {
      title,
      body,
      courseId,
      videoUrl,
      header,
      createdUserId,
    } = newModule;
    try {
      return await database.Module.create({
        title,
        body,
        videoUrl,
        header,
        courseId,
        createdUserId,
      });
    } catch (error) {
      throw error;
    }
    next();
  }

  static async getModule(id, next) {
    try {
      return await database.Module.findAll({
        where: {
          courseId: id,
        },
      });
    } catch (error) {
      throw error;
    }
    next();
  }

  static async getOneModule(id, next) {
    try {
      return await database.Module.findOne({ where: { id: id } });
    } catch (error) {
      throw error;
    }
    next();
  }
}

export default ModuleService;
