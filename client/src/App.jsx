import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/homepage/components/HomePage'
import { LoginPage } from './pages/loginPage/LoginPage'
import { Navbar } from './components/Navbar'
import { RegisterPage } from './pages/registerPage/RegisterPage'
import { CrudPage } from './pages/crudPage/CrudPage'
import { MiCuentaPage } from './pages/miCuenta/MiCuentaPage'

function App() {

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/registro" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/contacto" element={<LoginPage />} />
                <Route path="/crud" element={<CrudPage />} />
                <Route path="/micuenta" element={<MiCuentaPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App