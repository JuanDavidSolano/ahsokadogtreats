import { DataSource } from "typeorm";
import { Product, User, OrderItem, Order, Client } from "../models";

const dataSource: DataSource = new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_HOST || "localhost",
  port: Number(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USER || "admin",
  password: process.env.POSTGRES_PASSWORD || "admin",
  database: process.env.POSTGRES_DB || "ahsokadogtreats-dev",
  entities: [User, Client, Order, OrderItem, Product],
  synchronize: true,
});

export default dataSource;
