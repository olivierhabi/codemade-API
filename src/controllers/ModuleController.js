import "@babel/polyfill";
import ModuleService from "../service/ModuleService";

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
      const createModule = await ModuleService.addModule({
        title: title,
        body: body,
        courseId: courseId,
        createdUserId: id,
      });

      return res.status(201).send({
        status: 201,
        message: "Module created Successfully",
        data: createModule,
      });
    } catch (error) {
      return res
        .status(500)
        .send({ status: 500, message: "INTERNAL_SERVER ERROR" });
    }
  }
}
export default ModuleController;
