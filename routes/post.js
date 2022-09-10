const router = require("express").Router();
const postController = require("../controller/postController");

router.get("/getAll", postController.getAllPost);

module.exports = router;
