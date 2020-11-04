import { User } from "../../entity/User";
import { hash } from "bcrypt";
import { InvalidPassword } from "../../errors";
import { BaseDecodedToken } from "../../utils/dto";
import TokenHub from "./tokenHub";

async function loginUser(email: string, password: string) {
  const user = await _getUserWithEmail(email);
  password = await hash(password, user.salt);
  if (password !== user.password) {
    throw new InvalidPassword("Wrong password please try again");
  }
  const response = await getLoginPayload(user);
  return response;
}

async function getLoginPayload(user: User) {
  const payload: BaseDecodedToken = {
    id: user.id,
    age: user.age,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    username: user.username,
  };
  const accessToken = await TokenHub.createAccessToken(payload);
  const refreshToken = await TokenHub.createRefreshToken(payload);
  await TokenHub.saveRefreshToken(user.id, refreshToken);
  return { accessToken, refreshToken, payload };
}

async function _getUserWithEmail(email: string) {
  const user = User.findOne({ email });
  return user;
}
export default { loginUser };
