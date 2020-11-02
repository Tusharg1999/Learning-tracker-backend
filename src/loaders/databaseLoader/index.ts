import { createConnection } from "typeorm";

async function databaseLoader() {
  const connection = await createConnection();

  if (connection.isConnected) {
    console.log("Database is connected");
  }
}

export default databaseLoader;
