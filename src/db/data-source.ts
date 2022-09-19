import { Tag } from "../entities/Tag";
import { Task } from "../entities/Task";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "123456",
  database: "cope-db",
  entities: [Task, Tag],
  synchronize: true,
});
