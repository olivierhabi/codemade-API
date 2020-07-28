import database from "../models";

class MaterialService {
  static async addMaterial(newMaterial, next) {
    const { courseId, description, materialUrl, createdUserId } = newMaterial;

    try {
      return await database.Material.create({
        materialUrl,
        description,
        createdUserId,
        courseId,
      });
    } catch (error) {
      throw error;
    }
    next();
  }

  static async getOneMaterial(id, next) {
    try {
      return await database.Material.findOne({
        where: {
          id,
        },
      });
    } catch (error) {
      throw error;
    }
    next();
  }

  static async getAllMaterial(id, next) {
    try {
      return await database.Material.findAll({
        where: {
          courseId: id,
        },
      });
    } catch (error) {
      throw error;
    }
    next();
  }
}

export default MaterialService;
