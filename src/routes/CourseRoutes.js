import { Router } from "express";
import CourseController from "../controllers/CourseController";
import Auth from "../middleware/Auth";
import createCourseValidator from "../helpers/validators/createCourseValidator";

const { validate } = createCourseValidator;

const router = Router();

router.post("/", Auth, validate, CourseController.Create);
router.get("/", Auth, CourseController.GetCourses);
router.get("/me", Auth, CourseController.GetMyCourses);
router.get("/:id", Auth, CourseController.GetCourse);

export default router;