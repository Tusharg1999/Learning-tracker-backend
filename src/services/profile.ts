import { assert } from "console";
import { Request } from "express";

import ProfileUsecase from "../usecases/profile/profile";
import { SuccessResult } from "../utils/appResult";
import { runCatchingWithResult } from "../utils/appUtils";

async function updateProfile(req: Request) {
  return runCatchingWithResult(async () => {
    await ProfileUsecase.updateUserProfile(req)
    return new SuccessResult("done");
  });
}

export default { updateProfile };