import "@babel/polyfill";

import CourseService from "../service/CourseService";
import ModuleService from "../service/ModuleService";

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
      const courseFind = await CourseService.getCourse(courseId);

      if (courseFind.length == 0) {
        return res.status(400).send({
          status: 400,
          message: "We can't find course with given courseId"
        });
      }

      const getOneModule = await ModuleService.getOneModule(moduleId);

      if (getOneModule == null) {
        return res.status(400).send({
          status: 400,
          message: "We can't find module with the given moduleId"
        });
      }

      const createdChapter = await ChapterService.addChapter({
        title: title,
        body: body,
        courseId: courseId,
        moduleId: moduleId,
        createdUserId: id
      });
      return res.status(201).send({
        status: 201,
        message: "Chapter created Successfully",
        data: createdChapter
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
   * @return {object} chapter
   */
  static async GetChapters(req, res) {
    const { moduleId, courseId } = req.params;

    try {
      const getChapters = await ChapterService.getChapters({
        moduleId,
        courseId
      });

      if (getChapters == 0) {
        return res.status(400).send({
          status: 400,
          message: `We can't find chapters with the given courseId ${courseId} and moduleId ${moduleId}`
        });
      }

      return res.status(200).send({
        status: 200,
        message: `Chapters with CourseId ${courseId} and ModuleId ${moduleId} is successfully`,
        data: getChapters
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
   * @return {object} chapter
   */
  static async GetOneChapter(req, res) {
    const { id } = req.params;

    try {
      const getOneChapter = await ChapterService.getOneChapter(id);

      if (getOneChapter == null) {
        return res.status(400).send({
          status: 400,
          message: "We can't find chapter with the given chapterId"
        });
      }

      return res.status(200).send({
        status: 200,
        message: `Get Chapter is successfully`,
        data: getOneChapter
      });
    } catch (error) {
      return res
        .status(500)
        .send({ status: 500, message: "INTERNAL_SERVER ERROR" });
    }
  }
}
export default ChapterController;
