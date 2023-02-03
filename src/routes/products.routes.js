const { Router } = require('express');
const router = Router();
const { createProducts, productsWithUsersGreaterZero, } = require('../controlers/products.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post("/products", authMiddleware, createProducts);
router.get("/products", authMiddleware, productsWithUsersGreaterZero);

module.exports = router;