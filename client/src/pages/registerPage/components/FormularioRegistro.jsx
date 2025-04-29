import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { IoPersonAdd } from "react-icons/io5";
import { FaSquarePhone } from "react-icons/fa6";
import { validateUser } from "../../../services/validators";
import { fetchServices } from "../../../services/fetchServices";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";

export const FormularioRegistro = () => {
    const navigate = useNavigate()
    const { enqueueSnackbar } = useSnackbar()
    const [mostrarPassword, setMostrarPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({
        nombre: false,
        apellido: false,
        rut: false,
        email: false,
        password: false,
        repeatPassword: false
    })

    const [useForm, setUserForm] = useState({
        nombre: "",
        apellido: "",
        rut: "",
        email: "",
        telefono: "",
        password: "",
        repeatPassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserForm({ ...useForm, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        const validateInputs = validateUser(useForm)

        if (validateInputs.nombre || validateInputs.apellido || validateInputs.rut || validateInputs.email || validateInputs.password || validateInputs.repeatPassword) {
            setErrors(validateInputs)
            setTimeout(function () {
                setIsLoading(false)
            }, 1000);
            console.log("Formulario erroneo")
            return
        } else {
            const url = "http://localhost:3001/api/v1/auth"
            const method = "POST"
            const body = useForm
            const data = await fetchServices(url, method, null, body)

            if (data.code === 201) {
                enqueueSnackbar(data.message, { variant: 'success' });
                setTimeout(function () {
                    navigate('/login')
                }, 1000);
            } else {
                enqueueSnackbar(data.message, { variant: 'error' });
                setIsLoading(false)
            }
        }
    }

    return (
        <>
            <form className="space-y-4 w-2/4 mt-8" onSubmit={handleSubmit}>
                <div className="flex justify-center items-center space-x-4">
                    <FaUser />
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={useForm.nombre}
                        placeholder="Ingresa tu nombre"
                        className="flex w-full px-4 py-2 border border-gray-400 rounded-lg shadow-sm focus:ring-indigo-300"
                        onChange={handleChange}
                    />
                </div>
                <span className={`ms-9 text-red-600 font-semibold ${errors.nombre ? "block" : "hidden"}`}
                >El Nombre debe contener mínimo 2 caracteres</span>

                <div className="flex justify-center items-center space-x-4">
                    <FaUser />
                    <input
                        type="text"
                        id="apellido"
                        name="apellido"
                        value={useForm.apellido}
                        placeholder="Ingresa tu Apellido"
                        className="flex w-full px-4 py-2 border border-gray-400 rounded-lg shadow-sm focus:ring-indigo-300"
                        onChange={handleChange}
                    />
                </div>
                <span className={`ms-9 text-red-600 font-semibold ${errors.apellido ? "block" : "hidden"}`}
                >El Apellido debe contener mínimo 2 caracteres</span>

                <div className="flex justify-center items-center space-x-4">
                    <FaUser />
                    <input
                        type="text"
                        id="rut"
                        name="rut"
                        value={useForm.rut}
                        placeholder="Ingresa tu RUT"
                        className="flex w-full px-4 py-2 border border-gray-400 rounded-lg shadow-sm focus:ring-indigo-300"
                        onChange={handleChange}
                    />
                </div>
                <span className={`ms-9 text-red-600 font-semibold ${errors.rut ? "block" : "hidden"}`}
                >El RUT es inválido</span>

                <div className="flex justify-center items-center space-x-4">
                    <MdOutlineEmail />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={useForm.email}
                        placeholder="Ingresa tu email"
                        className="w-full px-4 py-2 border border-gray-400 rounded-lg shadow-sm focus:ring-indigo-300"
                        onChange={handleChange}
                        autoComplete="off"
                    />
                </div>
                <span className={`ms-9 text-red-600 font-semibold ${errors.email ? "block" : "hidden"}`}
                >El formato del email es inválido</span>

                <div className="flex justify-center items-center space-x-4">
                    <FaSquarePhone />
                    <input
                        type="text"
                        id="telefono"
                        name="telefono"
                        value={useForm.telefono}
                        placeholder="Ingresa tu número de telefono"
                        className="flex w-full px-4 py-2 border border-gray-400 rounded-lg shadow-sm focus:ring-indigo-300"
                        onChange={handleChange}
                    />
                </div>
                <span className={`ms-9 text-red-600 font-semibold ${errors.rut ? "block" : "hidden"}`}
                >El Número de telefono es inválido</span>

                <div className="flex justify-center items-center space-x-4">
                    <div
                        className="cursor-pointer"
                        onClick={() => setMostrarPassword(!mostrarPassword)}
                    >
                        {mostrarPassword ? <IoEye /> : <IoMdEyeOff />}
                    </div>
                    <input
                        type={mostrarPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={useForm.password}
                        placeholder="Ingresa tu password"
                        className="w-full px-4 py-2 border border-gray-400 rounded-lg shadow-sm focus:ring-indigo-300"
                        onChange={handleChange}
                    />
                </div>
                <span className={`ms-9 text-red-600 font-semibold ${errors.password ? "block" : "hidden"}`}
                >La contraseña debe contener mínimo 8 caracteres, una mayúscula, un número y un carácter especial</span>

                <div className="flex justify-center items-center space-x-4">
                    <div
                        className="cursor-pointer"
                        onClick={() => setMostrarPassword(!mostrarPassword)}
                    >
                        {mostrarPassword ? <IoEye /> : <IoMdEyeOff />}
                    </div>
                    <input
                        type={mostrarPassword ? "text" : "password"}
                        id="repeatPassword"
                        name="repeatPassword"
                        value={useForm.repeatPassword}
                        placeholder="Ingresa nuevamente tu password"
                        className="w-full px-4 py-2 border border-gray-400 rounded-lg shadow-sm focus:ring-indigo-300"
                        onChange={handleChange}
                    />
                </div>
                <span className={`ms-9 text-red-600 font-semibold ${errors.repeatPassword ? "block" : "hidden"}`}
                >Las Contraseñas No Coinciden</span>
                <div className="flex justify-center w-full">
                    <button
                        type="submit"
                        className="flex items-center px-4 py-2 text-slate-200 font-semibold
                        bg-green-600 rounded-lg hover:bg-green-900 hover:text-white transition-all duration-300">
                        {isLoading ? (
                            <PulseLoader color="#ffffff" size={10} />
                        ) : (
                            <>
                                <IoPersonAdd className="mx-2" />
                                <span>Registrarse</span>
                            </>
                        )}
                    </button>
                </div>
            </form>
        </>
    );
};