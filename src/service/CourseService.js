import database from "../models";

class CourseService {
  static async addCourse(newCourse, next) {
    const { title, body, createdUserId } = newCourse;
    try {
      return await database.Courses.create({
        title,
        body,
        createdUserId
      });
    } catch (error) {
      throw error;
    }
    next();
  }

  static async getCourses(id, next) {
    try {
      return await database.Courses.findAll();
    } catch (error) {
      throw error;
    }
    next();
  }

  static async getMyCourses(id, next) {
    try {
      return await database.Courses.findAll({
        where: {
          createdUserId: id
        }
      });
    } catch (error) {
      throw error;
    }
    next();
  }

  static async getCourse(id, next) {
    try {
      return await database.Courses.findAll({
        where: {
          id: id
        }
      });
    } catch (error) {
      throw error;
    }
    next();
  }
}

export default CourseService;
