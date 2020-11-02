import { Express } from "express";
import databaseLoader from "./databaseLoader";
import { expressLoader } from "./expressLoader";

async function appLoader(app: Express) {
  expressLoader(app);
  await databaseLoader();
}

export default appLoader