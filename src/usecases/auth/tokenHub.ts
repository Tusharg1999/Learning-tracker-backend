import jwt from "jsonwebtoken";
import { getConnection } from "typeorm";
import { BaseDecodedToken } from "../../utils/dto";
import { User } from "../../entity/User";

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

export default { createAccessToken, createRefreshToken, saveRefreshToken };
