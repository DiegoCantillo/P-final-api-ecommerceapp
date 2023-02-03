const ProducInCartServices = require("../services/productInCartServices");

const addProductInCart = async (req, res) => {
    try {
        const addNewProductInCart = req.body;
        const result = await ProducInCartServices.addProductInCart(addNewProductInCart);
        res.status(201).json({ message: "product added to cart successfully" })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
};

const allUserProducts = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await ProducInCartServices.getAllUserProducts(id);
        res.json(result)
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = {
    addProductInCart,
    allUserProducts
}