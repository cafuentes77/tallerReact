import { where } from "sequelize"
import { Usuario } from "../models/Usuario.models.js"


export const validarUsuario = async(req, res) =>{
    try {
        const {id} = req.params

        const { usuario } = Usuario.findOne({
            where
        })
    } catch (error) {
        
    }
}