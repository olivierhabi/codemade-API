import { Router } from "express";
import FileController from "../controllers/Filecontroller";
import Auth from "../middleware/Auth";
import createCourseValidator from "../helpers/validators/createCourseValidator";

const { validate } = createCourseValidator;

const router = Router();

router.post("/", Auth, FileController.Create);
export default router;
