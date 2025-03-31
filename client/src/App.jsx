import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/homepage/components/HomePage'
import { LoginPage } from './pages/loginPage/LoginPage'
import { Navbar } from './components/Navbar'
import { RegisterPage } from './pages/registerpage/RegisterPage'
import { CrudPage } from './pages/crudPage/CrudPage'

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
            </Routes>
        </BrowserRouter>
    )
}

export default App