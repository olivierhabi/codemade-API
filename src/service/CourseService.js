import database from "../models";

class CourseService {
  static async addCourse(newCourse, next) {
    const { title, body, createdUserId } = newCourse;
    try {
      return await database.Courses.create({
        title,
        body,
        createdUserId,
      });
    } catch (error) {
      throw error;
    }
    next();
  }
}

export default CourseService;
