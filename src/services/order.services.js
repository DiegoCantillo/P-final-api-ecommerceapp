const { users, products, productInCart, productInOrder, order, cart } = require("../models");


class OrdersServices {
    static async makeBuy(id) {
        try {
            const userCart = await cart.findOne({ where: { user_id: id } });
            const newOrder = {
                user_id: id,
                total_price: userCart.total_price
            };
            const result = await order.create(newOrder);
            const cartArray = await productInCart.findAll({
                where: { cart_id: userCart.id }
            });
            cartArray.forEach(async arrayProduct => {
                const { product_id, quantity } = arrayProduct;
                const product = await products.findOne({
                    where: {
                        id: arrayProduct.product_id
                    }
                });
                await productInOrder.create({
                    product_id,
                    quantity,
                    order_id: result.id,
                    price: product.price
                });
                await products.update({
                    available_qty: product.available_qty - arrayProduct.quantity
                },
                    {
                        where: { id: arrayProduct.product_id }
                    });
                await productInCart.destroy({
                    where: { cart_id: userCart.id }
                });
            });
            await cart.update({
                total_price: 0
            }, {
                where: {
                    user_id: id
                }
            })
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getOrder(id) {
        try {
            const result = users.findOne({
                where: { id },
                include: {
                    model: order,
                    as: "orders"
                }
            })
            return result;
        } catch (error) {
            throw error
        }
    }
};

module.exports = OrdersServices;