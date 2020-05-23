import express from "express";
import mongoose from "mongoose";

import cors from "cors";
import routes from "./routes";
import databaseConfig from "./config/database";

class App {
  constructor() {
    this.express = express();

    this.database();
    this.middlewares();
    this.routes();
  }

  database() {
    mongoose.connect(databaseConfig.uri, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
  }

  middlewares() {
    this.express.use(
      cors({
        exposedHeaders: "X-Total-Count"
      })
    );
    this.express.use(express.json());
  }

  routes() {
    this.express.use(routes);
  }
}

export default new App().express;
