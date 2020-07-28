import "@babel/polyfill";
import ModuleService from "../service/ModuleService";
import CourseService from "../service/CourseService";
import AuthService from "../service/AuthService";
import aws from "aws-sdk";
import readFilePromise from "fs-readfile-promise";

aws.config.update({
  secretAccessKey: process.env.AWS_SECRET_ACCESS,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  region: "eu-north-1",
});

class ModuleController {
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} module
   */
  static async Create(req, res) {
    const { title, body, courseId, header } = req.body;

    const video = req.files.video;

    const { id } = req.user;

    try {
      const findUserById = await AuthService.findUserById(id);

      if (findUserById == null) {
        return res.status(400).send({
          status: 400,
          message: "Please login to create course",
        });
      }
      if (video === undefined) {
        return res.status(400).send({
          status: 400,
          message: "Please upload Video Course",
        });
      }

      const courseFind = await CourseService.getCourse(courseId);

      if (courseFind.length == 0) {
        return res.status(400).send({
          status: 400,
          message: "We can't find course with given courseId",
        });
      }

      const fsReadFile = await readFilePromise(video.path);
      var s3bucket = new aws.S3({
        params: { Bucket: "course-videos-architectt" },
      });
      await s3bucket.createBucket();
      var params = {
        Key: `${Date.now().toString()}-${video.originalFilename}`,
        Body: fsReadFile,
        ACL: "public-read",
      };
      const datas = await s3bucket.upload(params).promise();
      const videoUrl = datas.Location;

      const createModule = await ModuleService.addModule({
        title: title,
        body: body,
        videoUrl: videoUrl,
        header: header,
        courseId: courseId,
        createdUserId: id,
      });

      return res.status(201).send({
        status: 201,
        message: "Module created Successfully",
        data: createModule,
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
   * @return {object} module
   */
  static async GetModule(req, res) {
    const { id } = req.params;

    try {
      const courseFind = await CourseService.getCourse(id);

      if (courseFind.length == 0) {
        return res.status(400).send({
          status: 400,
          message: "We can't find course with given courseId",
        });
      }
      const moduleByCourse = await ModuleService.getModule(id);

      if (moduleByCourse.length == 0) {
        return res.status(200).send({
          status: 200,
          message: "This course doesn't have any module",
        });
      }

      return res.status(200).send({
        status: 200,
        message: "Get Module by course ID is successfully",
        data: moduleByCourse,
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
   * @return {object} module
   */
  static async GetOneModule(req, res) {
    const { id } = req.params;

    try {
      const getOneModule = await ModuleService.getOneModule(id);

      if (getOneModule == null) {
        return res.status(400).send({
          status: 400,
          message: "We can't find module with the given moduleId",
        });
      }

      return res.status(200).send({
        status: 200,
        message: "Get Module is successfully",
        data: getOneModule,
      });
    } catch (error) {
      return res
        .status(500)
        .send({ status: 500, message: "INTERNAL_SERVER ERROR" });
    }
  }
}
export default ModuleController;
