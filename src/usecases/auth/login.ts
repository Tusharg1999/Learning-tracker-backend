import { User } from "../../entity/User";
import { hash } from "bcrypt";
import { InvalidPassword } from "../../errors";

async function loginUser(email: string, password: string) {
  const user = await _getUserWithEmail(email);
  password = await hash(password, user.salt);
  if (password !== user.password) {
    throw new InvalidPassword("Wrong password please try again");
  }
  const response = {
    username: user.username,
    email: user.email,
  };
  return response;
}

async function _getUserWithEmail(email: string) {
  const user = User.findOne({ email });
  return user;
}
export default { loginUser };
