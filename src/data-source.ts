import { DataSource } from "typeorm";


export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 7654,
  username: "root",
  password: "root",
  database: "homestead",
  entities: ["src/entity/*.ts"],
  migrations: [`src/migrations/*.ts`],


});
AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err)
  })