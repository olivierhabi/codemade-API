import database from "../models";

class MaterialService {
  static async addMaterial(newMaterial, next) {
    const { courseId, materialUrl, createdUserId } = newMaterial;

    try {
      return await database.Material.create({
        materialUrl,
        createdUserId,
        courseId
      });
    } catch (error) {
      throw error;
    }
    next();
  }
}

export default MaterialService;
