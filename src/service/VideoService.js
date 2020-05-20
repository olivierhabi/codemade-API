import database from "../models";

class VideoService {
  static async addVideo(newVideo, next) {
    const { videoUrl, moduleId, createdUserId } = newVideo;
    try {
      return await database.Video.create({
        videoUrl,
        moduleId,
        createdUserId,
      });
    } catch (error) {
      throw error;
    }
    next();
  }

  static async getOneVideo(id, next) {
    try {
      return await database.Video.findOne({
        where: {
          id,
        },
      });
    } catch (error) {
      throw error;
    }
    next();
  }
}

export default VideoService;
