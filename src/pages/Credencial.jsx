import { useEffect, useState } from "react";
import axios from "axios";
import cowork from '../assets/cowork.jpeg';
import Usuario from '../assets/usuario.jpg';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";




const Credencial = () => {
    const navigate = useNavigate();


    const [usuario, setUsuario] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const usuarioAutenticado = localStorage.getItem("usuario");
        if (!usuarioAutenticado) {
            setError("No estás autenticado. Redirigiendo...");
            // Redirigir al login si no hay usuario autenticado
            setTimeout(() => {
                window.location.href = "/login";
            }, 2000);
        } else {
            setUsuario(JSON.parse(usuarioAutenticado)); // Obtener datos del usuario desde localStorage
        }
    }, []);

    if (error) {
        return <p>{error}</p>;
    }

    if (!usuario) {
        return <p>Cargando...</p>;
    }

    return (
        <div className="credencial">
            <div className="credencial-card">
            <h2>Credencial de Usuario</h2>
            <img className="img" src={Usuario} alt="" />  <br />
            <p><strong>Nombre:</strong> {usuario.nombre}{usuario.app}{usuario.apm}</p>

            <p><strong>Correo:</strong> {usuario.correo}</p>
            <p><strong>Rol:</strong> {usuario.rol}</p><br />
            <br />
            <br />
            <button className='login-button-s' onClick={() => navigate("/login")}>salir</button>
            </div>
        </div>

    );


};

export default Credencial;
