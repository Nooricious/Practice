import authRouter from "./auth/index.js";
import categoryRouter from "./product/category.js";
import productRouter from "./product/index.js";
import salesRouter from "./sales/index.js";

const allRoutes = [
  authRouter,
  salesRouter,
  categoryRouter,
  productRouter,
];

export default allRoutes;
