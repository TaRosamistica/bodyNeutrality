const express = require("express");
const controller = require("../controllers/cadastroController");
const router = express.Router();

router.get("/all", controller.getAll)




module.exports = router