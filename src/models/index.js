const initModels = require('./init-models');
const db = require('../utils/database');

const models = initModels(db);

const { users, products, productInCart, productInOrder, order, cart } = models;


module.exports = {
    users,
    products,
    productInCart,
    productInOrder,
    order,
    cart
}