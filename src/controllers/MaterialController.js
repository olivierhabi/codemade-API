import "@babel/polyfill";
import MaterialService from "../service/MaterialService";
import CourseService from "../service/CourseService";
import AuthService from "../service/AuthService";
import aws from "aws-sdk";
import readFilePromise from "fs-readfile-promise";
import material from "../models/material";

aws.config.update({
  secretAccessKey: process.env.AWS_SECRET_ACCESS,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  region: "eu-north-1",
});

class MaterialController {
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} material
   */
  static async Create(req, res) {
    const { courseId, description } = req.body;

    const material = req.files.material;

    const { id } = req.user;

    try {
      const findUserById = await AuthService.findUserById(id);

      if (findUserById == null) {
        return res.status(400).send({
          status: 400,
          message: "Please login to create course",
        });
      }
      if (material === undefined) {
        return res.status(400).send({
          status: 400,
          message: "Please upload Material",
        });
      }

      const courseFind = await CourseService.getCourse(courseId);

      if (courseFind.length == 0) {
        return res.status(400).send({
          status: 400,
          message: "We can't find course with given courseId",
        });
      }

      const fsReadFile = await readFilePromise(material.path);
      var s3bucket = new aws.S3({
        params: { Bucket: "course-material-architectt" },
      });
      await s3bucket.createBucket();
      var params = {
        Key: `${Date.now().toString()}-${material.originalFilename}`,
        Body: fsReadFile,
        ACL: "public-read",
      };
      const datas = await s3bucket.upload(params).promise();
      const materialUrl = datas.Location;
      console.log(materialUrl);

      const createMaterial = await MaterialService.addMaterial({
        courseId,
        description,
        materialUrl,
        createdUserId: id,
      });

      return res.status(201).send({
        status: 201,
        message: "Material created Successfully",
        data: createMaterial,
      });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .send({ status: 500, message: "INTERNAL_SERVER ERROR" });
    }
  }

  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} material
   */
  static async getMaterial(req, res) {
    const { id } = req.params;
    try {
      const getOneMaterial = await MaterialService.getOneMaterial(id);

      if (getOneMaterial == null) {
        return res.status(400).send({
          status: 400,
          message: "We can't find material with given materialId",
        });
      }

      return res.status(200).send({
        status: 200,
        message: "Get Material Successfully",
        data: getOneMaterial,
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
   * @return {object} material
   */
  static async getAllMaterial(req, res) {
    const { id } = req.params;

    try {
      const getAllMaterial = await MaterialService.getAllMaterial(id);

      if (getAllMaterial.length == 0) {
        return res.status(400).send({
          status: 400,
          message: "We can't find materials with given courselId",
        });
      }

      return res.status(200).send({
        status: 200,
        message: "Get Material Successfully",
        data: getAllMaterial,
      });
    } catch (error) {
      return res
        .status(500)
        .send({ status: 500, message: "INTERNAL_SERVER ERROR" });
    }
  }
}

export default MaterialController;
