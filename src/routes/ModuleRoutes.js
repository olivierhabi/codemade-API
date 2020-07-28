import { Router } from "express";
import ModuleController from "../controllers/ModuleController";
import Auth from "../middleware/Auth";
import ModuleValidator from "../helpers/validators/moduleValidator";
import { Module } from "module";
import connect from "connect-multiparty";

const { validate } = ModuleValidator;

const router = Router();
const connection = connect();

router.post("/", Auth, connection, validate, ModuleController.Create);
router.get("/:id/course", Auth, ModuleController.GetModule);
router.get("/:id", Auth, ModuleController.GetOneModule);

export default router;
