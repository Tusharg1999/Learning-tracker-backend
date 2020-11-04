import { User } from "../../entity/User";
import { AlreadyExistError } from "../../errors";

async function emailChecker(email: string, context: string) {
  const user = await User.findOne({ email: email });
  console.log(user);

  if (user !== undefined && context === "Register") {
    throw new AlreadyExistError("Email already exist");
  }
  if (user === undefined && context === "Login") {
    throw new AlreadyExistError("Email not exist");
  }
}
async function usernameChecker(username: string) {
  const user = await User.findOne({ email: username });
  if (user !== undefined) {
    throw new AlreadyExistError("Username already exist");
  }
}

export { emailChecker, usernameChecker };
