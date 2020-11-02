import express from "express";
import appLoader from "./loaders";
import dotenv from "dotenv";

async function startServer() {
  dotenv.config();
  const app = express();
  await appLoader(app);

  app.listen(process.env.PORT, () => {
    console.log(`Server is running on Port ${process.env.PORT}`);
  });
}

startServer();
