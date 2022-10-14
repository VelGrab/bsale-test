const { Category, Product } = require("../../db");
const { Op } = require("sequelize");

const getAllCategories = async () => {
  try {
    const getCategories = Category.findAll({});
    return getCategories;
  } catch (error) {
    console.log(error);
  }
};

const getProductsByCategory = async (id) => {
  try {
    const getProducts = Product.findAll({
      where: {
        category: id,
      },
    });
    return getProducts;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllCategories,
  getProductsByCategory,
};
