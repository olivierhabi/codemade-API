import "@babel/polyfill";
import RateService from "../service/RateService";
import CourseService from "../service/CourseService";

class RateController {
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} rate
   */
  static async Create(req, res) {
    const { rate, commentRate, name, courseId } = req.body;
    const { id } = req.user;

    const courseFind = await CourseService.getCourse(courseId);

    if (courseFind.length == 0) {
      return res.status(400).send({
        status: 400,
        message: "We can't find course with given courseId",
      });
    }

    try {
      const createRate = await RateService.addRate({
        rate,
        commentRate,
        name,
        courseId,
        createdUserId: id,
      });

      return res.send({
        message: createRate,
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
   * @return {object} rate
   */
  static async GetAllRate(req, res) {
    const { id } = req.params;

    try {
      const getAllRate = await RateService.getAllRate(id);

      if (getAllRate.length == 0) {
        return res.status(400).send({
          status: 400,
          message: "We can't find any rate of this course",
        });
      }

      return res.status(200).send({
        status: 200,
        message: "Get Rate of this course is successfully",
        data: getAllRate,
      });
    } catch (error) {
      return res
        .status(500)
        .send({ status: 500, message: "INTERNAL_SERVER ERROR" });
    }
  }
}

export default RateController;
