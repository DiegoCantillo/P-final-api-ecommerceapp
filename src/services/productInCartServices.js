const { productInCart, users, cart, products } = require("../models");



class ProducInCartServices {
    static async addProductInCart(addNewProductInCart) {
        try {
            const result = await productInCart.create(addNewProductInCart);
            const product = await products.findOne({
                where: {
                    id: addNewProductInCart.product_id
                }
            });
            await cart.update({
                total_price: product.price * addNewProductInCart.quantity
            }, {
                where: {
                    id: addNewProductInCart.cart_id
                }
            })
            return result
        } catch (error) {
            throw error
        }
    }

    static async getAllUserProducts(id) {
        try {
            const result = await users.findOne({
                where: { id },
                attributes: ["username"],
                include: {
                    model: cart,
                    as: "carts",
                    attributes: ["total_price"],
                    include: {
                        model: productInCart,
                        as: "productInCarts",
                        include: {
                            model: products,
                            as: "product"
                        }
                    }
                }
            })
            return result;
        } catch (error) {
            throw error
        }
    }
}

module.exports = ProducInCartServices;