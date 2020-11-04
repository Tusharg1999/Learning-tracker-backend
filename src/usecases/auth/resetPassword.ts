import { genSalt, hash } from "bcrypt";
import { getConnection } from "typeorm";
import { User } from "../../entity/User";

async function resetPassword(email: string, newPassword: string) {
  const salt = await genSalt(10);
  const hashPassword = await hash(newPassword, salt);
  await getConnection()
    .createQueryBuilder()
    .update(User)
    .set({
      password: hashPassword,
      salt,
    })
    .where({ email: email })
    .execute();
  return "Password sucessfully changed.";
}

export default { resetPassword };
