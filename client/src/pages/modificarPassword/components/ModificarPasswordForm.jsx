import { Link } from "react-router-dom"
import { useState } from "react";

export const ModificarPasswordForm = () => {

    const [contraseñas, setContraseñas] = useState({
        contraseña: "",
        repeatContraseña: ""
    });

    const handleSubmit = () => {
        console.log(contraseñas);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContraseñas({ ...contraseñas, [name]: value });
    }

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">
                        Modificar Contraseña
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <input
                                type="password"
                                name="contraseña"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Ingrese su contraseña"
                                value={contraseñas.contraseña}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="password"
                                name="repeatContraseña"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Repita su contraseña"
                                value={contraseñas.repeatContraseña}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="flex items-center justify-center">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Cambiar Contraseña
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
