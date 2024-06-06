
import tokenModel from "../models/authentication/index.js";
import CategoryModel from "../models/product/category.js";
import ProductModel from "../models/product/index.js";
import SalesModel from "../models/sales/index.js";
import SaleProductModel from "../models/sales/saleProducts.js";
import UserModel from "../models/user/index.js";
import sequelize from "./config.js";

const syncDB = async () => {

  await sequelize.sync({ alter: true, force: false });
  await CategoryModel.sync({ alter: true, force: false });
  await ProductModel.sync({ alter: true, force: false });
  await UserModel.sync({ alter: true, force: false });
  await tokenModel.sync({ alter: true, force: false });

  await SalesModel.sync({ alter: true, force: false });
  await SaleProductModel.sync({ alter: true, force: false });
};

export default syncDB;