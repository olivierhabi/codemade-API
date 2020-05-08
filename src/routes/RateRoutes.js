import { Router } from "express";
import RateController from "../controllers/RateController";
import Auth from "../middleware/Auth";
import RateValidator from "../helpers/validators/createRateValidator";

const { validate } = RateValidator;

const router = Router();

router.post("/", Auth, validate, RateController.Create);

export default router;
