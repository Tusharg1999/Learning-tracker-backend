import { Request } from "express";
import { BadRequest } from "../../errors";
async function checkValidParam(req: Request) {
  const params = req.body;
  if (
    params.email.length > 0 ||
    params.password.length > 0 ||
    params.salt.length > 0 ||
    params.refreshToken.length > 0 ||
    params.username.length > 0
  ) {
    throw new BadRequest();
  }
}

async function updateUserProfile(req:Request) {
  const params=req.body;
}

export default { checkValidParam ,updateUserProfile};
