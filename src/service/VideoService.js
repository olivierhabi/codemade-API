import database from "../models";

class VideoService {
  static async addVideo(newVideo, next) {
    const {
      title,
      videoUrl,
      isWatched,
      courseId,
      moduleId,
      chapterId,
      createdUserId,
    } = newVideo;
    try {
      return await database.Video.create({
        title,
        videoUrl,
        isWatched,
        courseId,
        moduleId,
        chapterId,
        createdUserId,
      });
    } catch (error) {
      throw error;
    }
    next();
  }
}

export default VideoService;
