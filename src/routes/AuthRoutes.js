import { Router } from "express";
import AuthController from "../controllers/Authcontroller";
import signUpValidator from "../helpers/validators/signupValidator";
import signInValidator from "../helpers/validators/signInValidator";

const { validate } = signUpValidator;
const { validateSignin } = signInValidator;

const router = Router();

router.post("/signup", validate, AuthController.Signup);
router.post("/signin", validateSignin, AuthController.Signin);

export default router;
