const { users, products, productInCart, productInOrder, order, cart } = require("../models")
const initModels = require("../models/init-models")
const db = require("../utils/database")

initModels(db);

const user = [
    {
        username: "diego",
        email: "diego@gmail.com",
        password: "1234"
    },
    {
        username: "luis",
        email: "luis@gmail.com",
        password: "1234"
    },
    {
        username: "yo",
        email: "yo@gmail.com",
        password: "1234"
    }
]

const product = [
    {
        name: "iphone",
        price: 2000,
        available_qty: 6,
        status: true,
        image_url: "cel/img/iphone",
        user_id: 1
    },
    {
        name: "portatil",
        price: 4000,
        available_qty: 6,
        status: true,
        image_url: "pc/sjs/jdjd",
        user_id: 2
    },
    {
        name: "teclado",
        price: 1000,
        available_qty: 3,
        status: true,
        image_url: "tecla/img/pc",
        user_id: 3
    }
]

carrito = [
    {
        total_price: 7000,
        user_id: 1
    },
    {
        total_price: 4000,
        user_id: 2
    },
    {
        total_price: 23000,
        user_id: 3
    }
]

const productsincarts = [
    {
        quantity: 9,
        cart_id: 1,
        price: 2000,
        product_id: 1
    },
    {
        quantity: 4,
        cart_id: 2,
        price: 4000,
        product_id: 2
    },
    {
        quantity: 20,
        cart_id: 3,
        price: 52000,
        product_id: 3
    }
]

ordens = [
    {
        total_price: 9000,
        user_id: 1,
    },
    {
        total_price: 12000,
        user_id: 2,
    },
    {
        total_price: 49000,
        user_id: 3,
    }
]

const productinorder = [
    {
        order_id: 1,
        product_id: 1,
        quantity: 3,
        price: 200,
    }
]
db.sync({ force: true }).then(() => {
    console.log("Sincronizando el seeder");
    user.forEach(async (user) => await users.create(user));

    setTimeout(() => {
        product.forEach(async (product) => await products.create(product))
    }, 100);

    setTimeout(() => {
        carrito.forEach(async (car) => await cart.create(car))
    }, 200);

    setTimeout(() => {
        productsincarts.forEach(async (prod) => await productInCart.create(prod))
    }, 300);

    setTimeout(() => {
        ordens.forEach(async (orde) => await order.create(orde))
    }, 400);

    setTimeout(() => {
        productinorder.forEach(async (prod) => await productInOrder.create(prod))
    }, 500);

});
