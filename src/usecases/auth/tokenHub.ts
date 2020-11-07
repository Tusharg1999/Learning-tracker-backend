import jwt from "jsonwebtoken";
import { getConnection } from "typeorm";
import { BaseDecodedToken } from "../../utils/dto";
import { User } from "../../entity/User";
import { InvalidAccessTokenError } from "../../errors";

async function createAccessToken(payload: BaseDecodedToken): Promise<string> {
  const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_DURATION,
  });
  return accessToken;
}
async function createRefreshToken(payload: BaseDecodedToken): Promise<string> {
  const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: process.env.REFRESH_TOKEN_DURATION,
  });
  return refreshToken;
}

async function saveRefreshToken(id: string, refreshToken: string) {
  await getConnection()
    .createQueryBuilder()
    .update(User)
    .set({
      refreshToken: refreshToken,
    })
    .where({ id: id })
    .execute();
}
async function verifyAccessToken(token: string) {

  const isValid:any = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  if (typeof isValid !== "object") {
    throw new InvalidAccessTokenError();
  }
  console.log(isValid);
  
  return isValid;
}
export default {
  createAccessToken,
  createRefreshToken,
  saveRefreshToken,
  verifyAccessToken,
};
