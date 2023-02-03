const ProductServices = require("../services/products.services");


const createProducts = async (req, res) => {
    try {
        const newProduct = req.body;
        const result = await ProductServices.createProducts(newProduct);
        res.status(201).json({
            message: 'product create'
        });
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const productsWithUsersGreaterZero = async (req, res) => {
    try {
        let result = await ProductServices.getGreaterZero();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

module.exports = {
    createProducts,
    productsWithUsersGreaterZero
}