import { Router } from "express";
import CommentController from "../controllers/CommentController";
import Auth from "../middleware/Auth";
import createCommentValidator from "../helpers/validators/createCommentValidator";
import validator from "validator";

const { validate } = createCommentValidator;

const router = Router();

router.post("/", Auth, validate, CommentController.Create);
router.get("/:id", Auth, CommentController.GetComment);
router.get("/:id/course", Auth, CommentController.GetAllComment);

export default router;
