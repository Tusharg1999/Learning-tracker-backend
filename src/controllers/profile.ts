import { NextFunction, Request, Response } from "express";

import { okay, runCatchingWithResult } from "../utils/appUtils";
import ProfileServices from "../services/profile";

async function changProfile(req: Request, res: Response, next: NextFunction) {
  console.log(req.user);
  
  const result = await ProfileServices.updateProfile(req);
  return okay(res, result);
}

async function getProfile(req: Request, res: Response, next: NextFunction) {}

export default { changProfile, getProfile };
