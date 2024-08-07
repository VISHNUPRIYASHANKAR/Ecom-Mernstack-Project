const express = require("express")
const router = express.Router()

const UserController = require("../Controller/UserController")

router.post("/user/insert",UserController.insert)
router.get("/user/list",UserController.list)
router.post("/user/login",UserController.login)
router.post("/user/update/:id",UserController.update)
router.delete("/user/delete/:id",UserController.delete)
router.post("/user/insertUserwithAddress",UserController.insertUserwithAddress)
router.post("/user/insertUserwithAddressAndContacts",UserController.insertUserWidthAddreessContact)
module.exports = router