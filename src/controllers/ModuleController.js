import "@babel/polyfill";
import ModuleService from "../service/ModuleService";
import CourseService from "../service/CourseService";

class ModuleController {
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} module
   */
  static async Create(req, res) {
    const { title, body, courseId } = req.body;
    const { id } = req.user;

    try {
      const courseFind = await CourseService.getCourse(courseId);

      if (courseFind.length == 0) {
        return res.status(400).send({
          status: 400,
          message: "We can't find course with given courseId"
        });
      }

      const createModule = await ModuleService.addModule({
        title: title,
        body: body,
        courseId: courseId,
        createdUserId: id
      });

      return res.status(201).send({
        status: 201,
        message: "Module created Successfully",
        data: createModule
      });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .send({ status: 500, message: "INTERNAL_SERVER ERROR" });
    }
  }
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} module
   */
  static async GetModule(req, res) {
    const { id } = req.params;

    console.log(id);

    try {
      const courseFind = await CourseService.getCourse(id);

      if (courseFind.length == 0) {
        return res.status(400).send({
          status: 400,
          message: "We can't find course with given courseId"
        });
      }
      const moduleByCourse = await ModuleService.getModule(id);

      if (moduleByCourse.length == 0) {
        return res.status(200).send({
          status: 200,
          message: "This course doesn't have any module"
        });
      }

      return res.status(200).send({
        status: 200,
        message: "Get Module by course ID is successfully",
        data: moduleByCourse
      });
    } catch (error) {
      return res
        .status(500)
        .send({ status: 500, message: "INTERNAL_SERVER ERROR" });
    }
  }

  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} module
   */
  static async GetOneModule(req, res) {
    const { id } = req.params;

    try {
      const getOneModule = await ModuleService.getOneModule(id);

      if (getOneModule == null) {
        return res.status(400).send({
          status: 400,
          message: "We can't find module with the given moduleId"
        });
      }

      return res.status(200).send({
        status: 200,
        message: "Get Module is successfully",
        data: getOneModule
      });
    } catch (error) {
      return res
        .status(500)
        .send({ status: 500, message: "INTERNAL_SERVER ERROR" });
    }
  }
}
export default ModuleController;
