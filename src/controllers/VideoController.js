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
    const { videoUrl, moduleId } = req.body;

    const { id } = req.user;

    try {
      const getOneModule = await ModuleService.getOneModule(moduleId);

      if (getOneModule == null) {
        return res.status(400).send({
          status: 400,
          message: "We can't find module with the given moduleId",
        });
      }

      const createVideo = await VideoService.addVideo({
        videoUrl: videoUrl,
        moduleId: moduleId,
        createdUserId: id,
      });

      return res.status(201).send({
        status: 201,
        message: "Video created Successfully",
        data: createVideo,
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
          message: `We can't find video with the given videoId`,
        });
      }

      return res.status(200).send({
        status: 200,
        message: "Get Video is Successfully",
        data: getOneVideo,
      });
    } catch (error) {
      return res
        .status(500)
        .send({ status: 500, message: "INTERNAL_SERVER ERROR" });
    }
  }
}
export default VideoController;
