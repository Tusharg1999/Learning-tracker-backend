import { Request } from "express";
import {
  emailChecker,
  usernameChecker,
} from "../usecases/auth/existenceChecker";
import { SuccessResult } from "../utils/appResult";
import { runCatchingWithResult } from "../utils/appUtils";
import RegisterUsecase from "../usecases/auth/register";
import LoginUsecase from "../usecases/auth/login";

async function register(req: Request, context: string) {
  const { email, username, password } = req.body;
  return await runCatchingWithResult(async () => {
    await emailChecker(email,context);
    await usernameChecker(username);
    await RegisterUsecase.registerNewUser(email, password, username);
    return new SuccessResult("User successfully created");
  });
}

async function login(req: Request,context:string) {
  const { email, password } = req.body;
  return await runCatchingWithResult(async () => {
    await emailChecker(email,context);
    const result = await LoginUsecase.loginUser(email, password);
    return new SuccessResult(result);
  });
}
export default { register, login };
