import { Router } from "express";
import MaterialController from "../controllers/MaterialController";
import Auth from "../middleware/Auth";
import createMaterialValidator from "../helpers/validators/createMaterialValidator";

const { validate } = createMaterialValidator;

const router = Router();

router.post("/", Auth, validate, MaterialController.Create);

export default router;
