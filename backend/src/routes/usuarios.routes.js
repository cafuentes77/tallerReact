import { Router } from "express";
import { getUsuarioById } from "../controllers/usuario.controllers.js";
import { verificarToken } from "../middlewares/login.middleware.js";


const router = Router()

router.get("/:id", verificarToken, getUsuarioById)



export default router