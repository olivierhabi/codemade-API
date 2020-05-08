import "@babel/polyfill";
import MaterialService from "../service/MaterialService";

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

    // console.log(id, courseId, materialUrl);

    try {
      const createMaterial = await MaterialService.addMaterial({
        courseId,
        materialUrl,
        createdUserId: id
      });
      console.log(createMaterial);

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
}

export default MaterialController;
