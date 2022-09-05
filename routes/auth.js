const router = require("express").Router();
const userController = require("../controller/userController");

router.post("/register", userController.Register);

router.post("/login", userController.Login);

module.exports = router;
