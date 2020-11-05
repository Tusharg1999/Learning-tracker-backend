import express, { Router } from "express";
import { AuthRouter } from "./Auth";
import { UpdateProfileRouter } from "./Profile";

const router = Router();

router.use("/auth", AuthRouter);
router.use("/profile", UpdateProfileRouter);
export { router };
