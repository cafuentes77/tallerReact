import { useSearchParams, useParams } from "react-router-dom"
import { fetchServices } from "../../../services/fetchServices";
import { useSnackbar } from "notistack";



export const ValidateUser = () => {
    const { email } = useParams();
    const [Params] = useSearchParams();
    const token = Params.get("token");
    const { enqueueSnackbar } = useSnackbar()

    const validarUsuario = async () => {

        const url = `http://localhost:3001/api/v1/usuarios/validar-Usuario/${email}?token=${token}`;
        const method = "GET"

        try {
            const data = await fetchServices(url, method, null, null)

            if (data.code == 200){
                enqueueSnackbar(data.message, { variant: 'success' });
            }else {
                enqueueSnackbar(data.message, { variant: 'error' });
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
        <div className="flex justify-center items-center h-screen">
        <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded 
                focus:outline-none focus:shadow-outline w-96 h-32" 
                onClick={validarUsuario}
            >
                Validar Usuario
            </button>
        </div>
        </>
    )
}
