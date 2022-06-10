const { Router } = require("express");
const HelloController = require("../controllers/hello");

const router = Router();

router.get("/", HelloController.hello_get_all);

module.exports = router;
