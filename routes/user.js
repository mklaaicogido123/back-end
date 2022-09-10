const router = require("express").Router();
const userController = require("../controller/userController");

router.get("/getAll", userController.getAllUser);

router.post("/getUserByFullName", userController.getUserByFullName);

module.exports = router;
