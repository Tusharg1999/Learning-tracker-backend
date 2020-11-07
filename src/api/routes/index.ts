import express, { Router } from "express";
import { runCatching } from "../../utils/appUtils";
import ensureAuthorization from "../middleware/ensureAuthorization";
import { AuthRouter } from "./Auth";
import { UpdateProfileRouter } from "./Profile";

const router = Router();

router.use("/auth", AuthRouter);
router.use("/profile",runCatching(ensureAuthorization), UpdateProfileRouter);
export { router };
