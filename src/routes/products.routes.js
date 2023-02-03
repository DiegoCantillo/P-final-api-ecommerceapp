const { Router } = require('express');
const router = Router();
const { createProducts, productsWithUsersGreaterZero, } = require('../controlers/products.controller')

router.post("/products", createProducts);
router.get("/products", productsWithUsersGreaterZero);

module.exports = router;