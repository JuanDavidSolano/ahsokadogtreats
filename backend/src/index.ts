import "reflect-metadata";
import express, { Application } from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";

import dataSource from "./config/database";

import Router from "./router";

const PORT = process.env.PORT || 8000;

const app: Application = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  }),
);

app.use(Router);
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});

dataSource
  .initialize()
  .then(() => {
    console.log("DB has been initialized");
  })
  .catch((err) => {
    console.log("Error during Data Source initialization 1", err);
  });
