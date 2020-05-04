import "@babel/polyfill";
import CourseService from "../service/CourseService";

class CourseController {
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} course
   */
  static async Create(req, res) {
    const { title, body } = req.body;
    const { id } = req.user;
    try {
      const createCourse = await CourseService.addCourse({
        title: title,
        body: body,
        createdUserId: id,
      });

      return res.status(201).send({
        status: 201,
        message: "Course created Successfully",
        data: createCourse,
      });
    } catch (error) {
      return res
        .status(500)
        .send({ status: 500, message: "INTERNAL_SERVER ERROR" });
    }
  }
}
export default CourseController;
