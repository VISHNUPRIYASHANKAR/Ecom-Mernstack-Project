// const express = require("express")
// const router = express.Router()


// const OrderController = require("../Controller/OrderController")
// router.post("/createOrder",OrderController.createOrder)
// router.get("/orderlist",OrderController.orderlist)

// module.exports = router

const express = require("express");
const router = express.Router();

const OrderController = require("../Controller/OrderController");

router.post("/createOrder", OrderController.createOrder);
router.get("/orderList", OrderController.orderList);

module.exports = router;

