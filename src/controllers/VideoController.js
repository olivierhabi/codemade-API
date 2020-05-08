import "@babel/polyfill";
import VideoService from "../service/VideoService";
import ModuleService from "../service/ModuleService";
import CourseService from "../service/CourseService";
import ChapterService from "../service/ChapterService";

class VideoController {
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} video
   */
  static async Create(req, res) {
    const {
      title,
      videoUrl,
      isWatched,
      courseId,
      moduleId,
      chapterId
    } = req.body;

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

      const getChapter = await ChapterService.getOneChapter(chapterId);

      if (getChapter == null) {
        return res.status(400).send({
          status: 400,
          message: `We can't find chapter with the given chapterId`
        });
      }

      const createVideo = await VideoService.addVideo({
        title: title,
        videoUrl: videoUrl,
        isWatched: isWatched,
        courseId: courseId,
        moduleId: moduleId,
        chapterId: chapterId,
        createdUserId: id
      });

      return res.status(201).send({
        status: 201,
        message: "Video created Successfully",
        data: createVideo
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
   * @return {object} video
   */
  static async getOneVideo(req, res) {
    const { id } = req.params;

    try {
      const getOneVideo = await VideoService.getOneVideo(id);

      if (getOneVideo == null) {
        return res.status(400).send({
          status: 400,
          message: `We can't find video with the given videoId`
        });
      }

      return res.status(200).send({
        status: 200,
        message: "Get Video is Successfully",
        data: getOneVideo
      });
    } catch (error) {
      return res
        .status(500)
        .send({ status: 500, message: "INTERNAL_SERVER ERROR" });
    }
  }
}
export default VideoController;
