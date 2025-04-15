import { Usuario } from "../models/Usuario.models.js";
import { normalizeEmail, normalizeRut } from "../utils/normalize.js";
import { validateUser, userExist } from "../services/validarUsuario.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
    try {
        const { nombre, apellido, email, telefono, rut, password } = req.body;

        validateUser ({nombre, apellido, email, telefono, rut, password})
        await userExist(rut, email, telefono)

        const hash = bcrypt.hashSync(password, 10);
        const nuevoUsuario = await Usuario.create({
            nombre,
            apellido,
            email: normalizeEmail(email),
            telefono,
            rut: normalizeRut(rut),
            password: hash
        })

        res.status(201).json({
            code: 201,
            message: "Usuario Creado Correctamente",
            data: nuevoUsuario
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            code: 500,
            message: "Hubo un error en el servidor",
            error: error.message
        });
    }
}

export const login = async (req, res) => {
    try {
        const {email, password } = req.body;
        res.status(200).json({
            code: 200,
            message: "Inicio de Sesión Exitoso",
            usuario: req.usuario,
            token:req.token
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            code: 500,
            message: "Hubo un error en el servidor",
            error: error.message
        });
    }
}