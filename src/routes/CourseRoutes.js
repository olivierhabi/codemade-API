import { Router } from "express";
import CourseController from "../controllers/CourseController";
import Auth from "../middleware/Auth";
import createCourseValidator from "../helpers/validators/createCourseValidator";

const { validate } = createCourseValidator;

const router = Router();

router.post("/", Auth, validate, CourseController.Create);

export default router;
