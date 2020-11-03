import { hash, genSalt } from "bcrypt";
import { getConnection } from "typeorm";

async function registerNewUser(
  email: string,
  password: string,
  username: string
) {
  const salt = await genSalt(10);
  const hashPassword = await hash(password, salt);
  const result =await getConnection()
    .createQueryBuilder()
    .insert()
    .into("user")
    .values({
      email,
      password: hashPassword,
      username,
      salt,
    })
    .execute();    
}

export default { registerNewUser };
