import { Router } from "express";
import ChapterController from "../controllers/ChapterController";
import Auth from "../middleware/Auth";
import createChapterValidator from "../helpers/validators/createChapterValidator";

const { validate } = createChapterValidator;

const router = Router();

router.post("/", Auth, validate, ChapterController.Create);
router.get("/:moduleId/:courseId", Auth, ChapterController.GetChapters);
router.get("/:id", Auth, ChapterController.GetOneChapter);

export default router;
