const { Router } = require('express')
const { register, login } = require('../controlers/authUsers.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = Router();

router.post('/register', register);
router.post('/login', login);


module.exports = router;