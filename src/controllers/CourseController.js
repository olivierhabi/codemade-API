import "@babel/polyfill";
import CourseService from "../service/CourseService";
import AuthService from "../service/AuthService";
import aws from "aws-sdk";
import readFilePromise from "fs-readfile-promise";

aws.config.update({
  secretAccessKey: process.env.AWS_SECRET_ACCESS,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  region: "eu-north-1",
});

class CourseController {
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} course
   */
  static async Create(req, res) {
    const { title, body, courseType, features, price } = req.courseData;

    const image = req.files.image;

    const { id } = req.user;
    try {
      const findUserById = await AuthService.findUserById(id);

      if (findUserById == null) {
        return res.status(400).send({
          status: 400,
          message: "Please login to create course",
        });
      }
      if (image === undefined) {
        return res.status(400).send({
          status: 400,
          message: "Please upload Image",
        });
      }
      const fsReadFile = await readFilePromise(image.path);
      var s3bucket = new aws.S3({
        params: { Bucket: "course-videos-architectt" },
      });
      await s3bucket.createBucket();
      var params = {
        Key: `${Date.now().toString()}-${image.originalFilename}`,
        Body: fsReadFile,
        ACL: "public-read",
      };
      const datas = await s3bucket.upload(params).promise();
      const imageUrl = datas.Location;

      const createCourse = await CourseService.addCourse({
        title: title,
        body: body,
        courseType: courseType,
        imageUrl: imageUrl,
        price: price,
        features: features,
        createdUserId: id,
      });
      return res.status(201).send({
        status: 201,
        message: "Course created Successfully",
        data: createCourse,
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
   * @return {object} course
   */
  static async GetCourses(req, res) {
    try {
      const getCourses = await CourseService.getCourses();

      return res.status(200).send({
        status: 200,
        message: "Get course is successfully",
        data: getCourses,
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
   * @return {object} course
   */
  static async GetMyCourses(req, res) {
    const { id } = req.user;

    try {
      const getMyCourses = await CourseService.getMyCourses(id);

      return res.status(200).send({
        status: 200,
        message: "Get My course is successfully",
        data: getMyCourses,
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
   * @return {object} course
   */
  static async GetCourse(req, res) {
    const { id } = req.params;

    try {
      const getCourse = await CourseService.getCourse(id);

      if (getCourse.length == 0) {
        return res.status(400).send({
          status: 400,
          message: "We can't find course with the given courseId",
        });
      }

      return res.status(200).send({
        status: 200,
        message: "Get course is successfully",
        data: getCourse,
      });
    } catch (error) {
      return res
        .status(500)
        .send({ status: 500, message: "INTERNAL_SERVER ERROR" });
    }
  }
}
export default CourseController;
