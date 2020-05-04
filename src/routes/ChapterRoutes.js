import { Router } from "express";
import ChapterController from "../controllers/ChapterController";
import Auth from "../middleware/Auth";
import createChapterValidator from "../helpers/validators/createChapterValidator";

const { validate } = createChapterValidator;

const router = Router();

router.post("/", Auth, validate, ChapterController.Create);

export default router;
