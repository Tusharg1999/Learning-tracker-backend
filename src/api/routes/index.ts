import express, { Router } from "express";
import { AuthRouter } from "./auth";

const router = Router();

router.use("/auth", AuthRouter);
export { router };
