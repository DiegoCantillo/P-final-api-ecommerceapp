const { Router } = require('express');
const { addProductInCart, allUserProducts } = require('../controlers/productInCart.controller');

const router = Router();

router.post('/addproductcart', addProductInCart);
router.get('/allUserProducts/:id', allUserProducts)

module.exports = router;