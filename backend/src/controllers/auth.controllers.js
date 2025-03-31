




export const createUser = async (req, res) => {
    try {
        const { nombre, apellido, email, telefono, rut, password } = req.body;

        validateUser ({nombre, apellido, email, telefono, rut, password})
        await userExist(rut, email, telefono)

    } catch (error) {
        console.log(error);
        res.status(500).json({
            code: 500,
            message: "Hubo un error en el servidor",
        });
    }
}