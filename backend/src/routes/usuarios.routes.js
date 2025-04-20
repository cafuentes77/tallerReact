import { Router } from "express";
import { getUsuarioById, ValidarUsuario } from "../controllers/usuario.controllers.js";
import { verificarToken } from "../middlewares/login.middleware.js";


const router = Router()

router.get("/:id", verificarToken, getUsuarioById)
router.get("/validar-Usuario/:email", verificarToken, ValidarUsuario)



export default router