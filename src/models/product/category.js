import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";

const CategoryModel = sequelize.define("category", {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default CategoryModel;
