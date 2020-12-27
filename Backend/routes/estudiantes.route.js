const express = require("express")
const router = express.Router()
const estudiantesController = require("../controllers/estudiantes.controller")

router.get("/getUsuarios", estudiantesController.getUsuarios)
router.get("/login", estudiantesController.login)
router.post("/registro", estudiantesController.addUsuario)
module.exports = router