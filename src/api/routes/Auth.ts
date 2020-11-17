import { Router } from "express";
import AuthController from "../../controllers/auth";
import { runCatching } from "../../utils/appUtils";
import Validator from "../middleware/validationMiddleware";

const router = Router();

router.post(
  "/login",
  Validator.loginValidationFunction(),
  runCatching(AuthController.login)
);
router.post(
  "/register",
  Validator.registerValidationFunction(),
  runCatching(AuthController.register)
);
router.post(
  "/reset-password",
  Validator.passwordResetValidationFunction(),
  runCatching(AuthController.passwordReset)
);
export { router as AuthRouter };
