import { Router } from "express";
import ModuleController from "../controllers/ModuleController";
import Auth from "../middleware/Auth";
import ModuleValidator from "../helpers/validators/moduleValidator";

const { validate } = ModuleValidator;

const router = Router();

router.post("/", Auth, validate, ModuleController.Create);

export default router;
