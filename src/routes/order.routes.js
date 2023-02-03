const { Router } = require("express");
const { makeBuy, getUsersOrder } = require("../controlers/orders.controllers");
const authMiddleware = require("../middlewares/auth.middleware");


const router = Router();

router.post("/order/:id", authMiddleware, makeBuy);
router.get("/order/:id", authMiddleware, getUsersOrder)

module.exports = router;