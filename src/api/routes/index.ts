import express, { Router } from "express";
import { AuthRouter } from "./auth";
import { UpdateProfileRouter } from "./updateProfile";

const router = Router();

router.use("/auth", AuthRouter);
router.use("/profile", UpdateProfileRouter);
export { router };
