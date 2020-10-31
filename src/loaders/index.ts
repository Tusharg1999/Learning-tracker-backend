import { Express } from "express";
import { expressLoader } from "./expressLoader";

function appLoader(app: Express) {
  expressLoader(app);
}

export default appLoader