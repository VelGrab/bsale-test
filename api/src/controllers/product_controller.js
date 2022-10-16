const { Product } = require("../../db");
const { Op } = require("sequelize");

/**
 * Get all products where price is greater than 0 and url_image is not empty
 * @returns An array of objects.
 */
const getAllProducts = async () => {
  try {
    const getProducts = await Product.findAll({
      where: {
        [Op.and]: [{ price: { [Op.gt]: 0 } }],
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

/**
 * It gets all the products that match the name that the user is looking for
 * @param name - "Coca-Cola"
 * @returns An array of objects.
 */
const getProductsByNames = async (name) => {
  try {
    const getProducts = await Product.findAll({
      where: {
        name: {
          [Op.like]: `%${name}%`,
        },
      },
    });
    getProducts.forEach((product) => {
      if (product.url_image === null || product.url_image === "") {
        product.url_image = "https://cutt.ly/2BD9LY6";
      }
    });
    if (getProducts.length === 0) {
      return console.log("No se encontraron productos con ese nombre");
    }
    return getProducts;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllProducts,
  getProductsByNames,
};
