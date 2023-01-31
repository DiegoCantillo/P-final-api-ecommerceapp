const { Router } = require('express');
const { router } = require('../app');
const ruter = Router();

router.post('/product', createProduct);