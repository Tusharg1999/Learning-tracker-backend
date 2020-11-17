import { Router } from "express";
import { runCatching } from "../../utils/appUtils";
import { multerFileAcceptor } from "../middleware/multerFileAcceptor";
import ProfileService from "../../controllers/profile";

const router = Router();

router.get(
  "/",
  runCatching(ProfileService.getProfile)
);
router.post(
  "/",
  [multerFileAcceptor.single("profileImage")],
  runCatching(ProfileService.changProfile)
);

export { router as UpdateProfileRouter };
