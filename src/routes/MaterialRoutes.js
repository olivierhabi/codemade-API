import { Router } from "express";
import MaterialController from "../controllers/MaterialController";
import Auth from "../middleware/Auth";
import createMaterialValidator from "../helpers/validators/createMaterialValidator";
import connect from "connect-multiparty";

const { validate } = createMaterialValidator;

const router = Router();
const connection = connect();

router.post("/", Auth, connection, validate, MaterialController.Create);
router.get("/:id", Auth, MaterialController.getMaterial);
router.get("/:id/course", Auth, MaterialController.getAllMaterial);

export default router;
