const { Product } = require("../../db");
const { Op } = require("sequelize");

/**
 * Get all products where price is greater than 0 and url_image is not empty
 * @returns An array of objects.
 */
const getAllProducts = async () => {
  try {
    const getProducts = Product.findAll({
      where: {
        [Op.and]: [{ price: { [Op.gt]: 0 } }, { url_image: { [Op.ne]: "" } }],
      },
    });
    return getProducts;
  } catch (error) {
    console.log(error);
  }
};

const getProductsByNames = async (name) => {
  try {
    const getProducts = Product.findAll({
      where: {
        name: {
          [Op.like]: `%${name}%`,
        },
      },
    });
    return getProducts;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllProducts,
  getProductsByNames,
};
