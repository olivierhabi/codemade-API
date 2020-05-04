import "@babel/polyfill";
import ChapterService from "../service/ChapterService";

class ChapterController {
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} chapter
   */
  static async Create(req, res) {
    const { title, body, courseId, moduleId } = req.body;
    const { id } = req.user;

    try {
      const createdChapter = await ChapterService.addChapter({
        title: title,
        body: body,
        courseId: courseId,
        moduleId: moduleId,
        createdUserId: id,
      });
      return res.status(201).send({
        status: 201,
        message: "Chapter created Successfully",
        data: createdChapter,
      });
    } catch (error) {
      return res
        .status(500)
        .send({ status: 500, message: "INTERNAL_SERVER ERROR" });
    }
  }
}
export default ChapterController;
