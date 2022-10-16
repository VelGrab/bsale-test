const { Category, Product } = require("../../db");

/**
 * It gets all the categories from the database and returns them.
 * @returns An array of objects.
 */
const getAllCategories = async () => {
  try {
    const getCategories = await Category.findAll({});
    return getCategories;
  } catch (error) {
    console.log(error);
  }
};

/**
 * It gets all the products from the database that have the same category id as the one passed in the
 * function.
 * @param id - the id of the category
 * @returns An array of objects.
 */
const getProductsByCategory = async (id) => {
  try {
    const getProducts = await Product.findAll({
      where: {
        category: id,
      },
    });
    getProducts.forEach((product) => {
      if (product.url_image === null || product.url_image === "") {
        product.url_image = "https://cutt.ly/2BD9LY6";
      }
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
