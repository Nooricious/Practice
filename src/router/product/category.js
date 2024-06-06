import { Router } from "express";
import categoryController from "../../controllers/product/category.js";
const categoryRouter = Router();
categoryRouter.get("/categories", categoryController.getAll);

categoryRouter.post("/category", categoryController.create);

categoryRouter.get("/category/:id", categoryController.getSingle);

export default categoryRouter;
