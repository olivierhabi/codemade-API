import "@babel/polyfill";
import VideoService from "../service/VideoService";

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
      chapterId,
    } = req.body;

    const { id } = req.user;

    try {
      const createVideo = await VideoService.addVideo({
        title: title,
        videoUrl: videoUrl,
        isWatched: isWatched,
        courseId: courseId,
        moduleId: moduleId,
        chapterId: chapterId,
        createdUserId: id,
      });

      return res.status(201).send({
        status: 201,
        message: "Video created Successfully",
        data: createVideo,
      });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .send({ status: 500, message: "INTERNAL_SERVER ERROR" });
    }
  }
}
export default VideoController;
