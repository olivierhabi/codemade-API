import "@babel/polyfill";
import CommentService from "../service/CommentService";

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
    console.log(comment, courseId, id);

    try {
      const createdComment = await CommentService.addComment({
        comment: comment,
        courseId: courseId,
        createdUserId: id,
      });
      return res.status(201).send({
        status: 201,
        message: "Comment created Successfully",
        data: createdComment,
      });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .send({ status: 500, message: "INTERNAL_SERVER ERROR" });
    }
  }
}
export default CommentController;
