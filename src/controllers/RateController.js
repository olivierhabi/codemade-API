import "@babel/polyfill";
import RateService from "../service/RateService";

class RateController {
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} rate
   */
  static async Create(req, res) {
    const { rate, courseId } = req.body;
    const { id } = req.user;

    console.log(courseId, rate, id);

    try {
      const createRate = await RateService.addRate({
        rate,
        courseId,
        createdUserId: id
      });

      return res.send({
        message: createRate
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export default RateController;
