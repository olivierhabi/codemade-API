import "@babel/polyfill";
import MaterialService from "../service/MaterialService";
import CourseService from "../service/CourseService";

class MaterialController {
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} material
   */
  static async Create(req, res) {
    const { courseId, materialUrl } = req.body;
    const { id } = req.user;

    try {
      const courseFind = await CourseService.getCourse(courseId);

      if (courseFind.length == 0) {
        return res.status(400).send({
          status: 400,
          message: "We can't find course with given courseId"
        });
      }

      const createMaterial = await MaterialService.addMaterial({
        courseId,
        materialUrl,
        createdUserId: id
      });

      return res.status(201).send({
        status: 201,
        message: "Material created Successfully",
        data: createMaterial
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
   * @return {object} material
   */
  static async getMaterial(req, res) {
    const { id } = req.params;
    try {
      const getOneMaterial = await MaterialService.getOneMaterial(id);

      if (getOneMaterial == null) {
        return res.status(400).send({
          status: 400,
          message: "We can't find material with given materialId"
        });
      }

      return res.status(200).send({
        status: 200,
        message: "Get Material Successfully",
        data: getOneMaterial
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
   * @return {object} material
   */
  static async getAllMaterial(req, res) {
    const { id } = req.params;

    try {
      const getAllMaterial = await MaterialService.getAllMaterial(id);

      if (getAllMaterial.length == 0) {
        return res.status(400).send({
          status: 400,
          message: "We can't find materials with given courselId"
        });
      }

      return res.status(200).send({
        status: 200,
        message: "Get Material Successfully",
        data: getAllMaterial
      });
    } catch (error) {
      return res
        .status(500)
        .send({ status: 500, message: "INTERNAL_SERVER ERROR" });
    }
  }
}

export default MaterialController;
