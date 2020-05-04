import { Router } from "express";
import VideoController from "../controllers/VideoController";
import Auth from "../middleware/Auth";
import VideoValidator from "../helpers/validators/VideoValidator";

const { validate } = VideoValidator;

const router = Router();

router.post("/", Auth, validate, VideoController.Create);

export default router;
