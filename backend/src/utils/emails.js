import nodemailer from "nodemailer";
import dotenv from "dotenv"
import * as path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, "../.env") });
import { crearTemplateHtml } from "./templateEmail.js";



const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_SECURE === "true",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

transporter.verify((error, success) => {
    if (error) {
        console.error("Error en la conexión SMTP:", error);
    } else {
        console.log("Conexión SMTP exitosa");
    }
});

export const crearMailOptions = (email, asunto, token, username) => {

    let asuntoCorreo
    if (asunto === "registro") {
        asuntoCorreo = "Bienvenido a nuestro sitio web, por favor debes validar tu cuenta"
    } else if (asunto === "nuevaValidacion") {
        asuntoCorreo = "Email de validación"
    } else if (asunto === "recuperarPassword") {
        asuntoCorreo = "Enlace de recuperación de Password"
    } else {
        asuntoCorreo = "Modificación de Contraseña"
    }


    const mailOptions = {
        from: process.env.EMAIL_USER, // Dirección del remitente
        to: `${email}`, // Dirección del destinatario
        subject: asuntoCorreo, // Asunto del correo
        text: "",
        html: crearTemplateHtml(email, asunto, token, username), // Cuerpo del correo en HTML (opcional)
    };

    return mailOptions
}


export const enviarCorreo = (email, asunto, token, username) => {

    const mailOptions = crearMailOptions(email, asunto, token, username)

    // Enviar el correo
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("Error al enviar el correo:", error);
        } else {
            console.log("Correo enviado:", info.response);
        }
    });
}