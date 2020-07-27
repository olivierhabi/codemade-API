import bcrypt from "bcryptjs";
import "@babel/polyfill";
import upload from "../service/FileUploadService";

const singleUpload = upload.single("video");

class FileController {
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} file
   */
  static async Create(req, res) {
    singleUpload(req, res, (err) => {
      if (err) {
        return res
          .status(404)
          .send({ message: "File Upload Error", errors: err.message });
      }

      return res.status(200).send({
        message: "File Upload successfull",
        videoUrl: req.file.location,
      });
    });
  }
}

export default FileController;
