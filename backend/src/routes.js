import { Router } from "express";

import ProductController from "./app/controllers/Product";

const routes = Router();

routes.get("/products", ProductController.index);
routes.get("/products/:id", ProductController.show);
routes.post("/products", ProductController.store);
routes.put("/products", ProductController.update);
routes.delete("/products", ProductController.destroy);

export default routes;
