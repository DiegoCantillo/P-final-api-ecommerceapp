
const createProducts = async (req, res) => {
    try {
        const newPorduct = req.body;
        const result = ProductsSercices.createProducts(newPorduct);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = {
    createProducts,
}