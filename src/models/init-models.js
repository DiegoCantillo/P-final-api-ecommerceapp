const DataTypes = require("sequelize").DataTypes;
const _users = require("./users");
const _products = require("./products");
const _cart = require("./cart");
const _order = require("./order");
const _productInCart = require("./productInCart");
const _productInOrder = require("./productInOrder");

function initModels(sequelize) {
  const users = _users(sequelize, DataTypes);
  const products = _products(sequelize, DataTypes);
  const cart = _cart(sequelize, DataTypes);
  const order = _order(sequelize, DataTypes);
  const productInCart = _productInCart(sequelize, DataTypes);
  const productInOrder = _productInOrder(sequelize, DataTypes);



  productInCart.belongsTo(cart, { as: "cart", foreignKey: "cart_id" });
  cart.hasMany(productInCart, { as: "productInCarts", foreignKey: "cart_id" });
  productInOrder.belongsTo(order, { as: "order", foreignKey: "order_id" });
  order.hasMany(productInOrder, { as: "productInOrders", foreignKey: "order_id" });
  productInCart.belongsTo(products, { as: "product", foreignKey: "product_id" });
  products.hasMany(productInCart, { as: "productInCarts", foreignKey: "product_id" });
  productInOrder.belongsTo(products, { as: "product", foreignKey: "product_id" });
  products.hasMany(productInOrder, { as: "productInOrders", foreignKey: "product_id" });
  cart.belongsTo(users, { as: "user", foreignKey: "user_id" });
  users.hasMany(cart, { as: "carts", foreignKey: "user_id" });
  order.belongsTo(users, { as: "user", foreignKey: "user_id" });
  users.hasMany(order, { as: "orders", foreignKey: "user_id" });
  products.belongsTo(users, { as: "user", foreignKey: "user_id" });
  users.hasMany(products, { as: "products", foreignKey: "user_id" });

  return {
    users,
    products,
    cart,
    order,
    productInCart,
    productInOrder,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
