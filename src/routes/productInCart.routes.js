const { Router } = require('express');
const { addProductInCart, allUserProducts } = require('../controlers/productInCart.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = Router();

router.post('/addproductcart', authMiddleware, addProductInCart);
router.get('/allUserProducts/:id', authMiddleware, allUserProducts)

module.exports = router;