const express = require("express");
const controller = require("../controllers/cadastroController");
const router = express.Router();

router.get("/all", controller.getAll);
router.get("/:id", controller.getById)
router.post("/create", controller.createCadastro);
router.put("/update/:id", controller.updateCadastroById)
router.delete("/delete/:id", controller.deleteCasdastro)




module.exports = router