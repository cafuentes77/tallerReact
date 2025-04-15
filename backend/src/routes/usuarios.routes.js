import { Router } from "express";
import { getUsuarioById } from "../controllers/usuario.controllers.js";


const router = Router()

router.get("/:id", getUsuarioById)



export default router