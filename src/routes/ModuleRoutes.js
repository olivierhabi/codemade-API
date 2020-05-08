import { Router } from "express";
import ModuleController from "../controllers/ModuleController";
import Auth from "../middleware/Auth";
import ModuleValidator from "../helpers/validators/moduleValidator";
import { Module } from "module";

const { validate } = ModuleValidator;

const router = Router();

router.post("/", Auth, validate, ModuleController.Create);
router.get("/:id/course", Auth, ModuleController.GetModule);
router.get("/:id", Auth, ModuleController.GetOneModule);

export default router;
