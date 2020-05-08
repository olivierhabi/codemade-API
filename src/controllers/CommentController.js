import "@babel/polyfill";
import CommentService from "../service/CommentService";
import CourseService from "../service/CourseService";

class CommentController {
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} comment
   */
  static async Create(req, res) {
    const { comment, courseId } = req.body;
    const { id } = req.user;

    try {
      const courseFind = await CourseService.getCourse(courseId);

      if (courseFind.length == 0) {
        return res.status(400).send({
          status: 400,
          message: "We can't find course with given courseId"
        });
      }

      const createdComment = await CommentService.addComment({
        comment: comment,
        courseId: courseId,
        createdUserId: id
      });
      return res.status(201).send({
        status: 201,
        message: "Comment created Successfully",
        data: createdComment
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
   * @return {object} comment
   */
  static async GetComment(req, res) {
    const { id } = req.params;

    try {
      const getOneComment = await CommentService.getComment(id);

      if (getOneComment == null) {
        return res.status(400).send({
          status: 400,
          message: "We can't find comment with given commentId"
        });
      }

      return res.status(200).send({
        status: 200,
        message: "Get comment Successfully",
        data: getOneComment
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
   * @return {object} comment
   */
  static async GetAllComment(req, res) {
    const { id } = req.params;

    try {
      const getAllcomment = await CommentService.getAllComment(id);

      if (getAllcomment.length == 0) {
        return res.status(400).send({
          status: 400,
          message: "We can't find comments of this course"
        });
      }

      return res.status(200).send({
        status: 200,
        message: "Get all comment is successfully",
        data: getAllcomment
      });
    } catch (error) {
      return res
        .status(500)
        .send({ status: 500, message: "INTERNAL_SERVER ERROR" });
    }
  }
}
export default CommentController;
