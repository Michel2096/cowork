import { useState } from "react";
import axios from "axios";

const UsuarioForm = () => {
    const [usuario, setUsuario] = useState({
        nombre: "",
        correo: "",
        pass: "",
    });


    const handleChange = (e) => {  
        setUsuario({...usuario,[e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/usuarios", usuario)
        .then(()=> alert("Usuario creado"))
        .catch(error => console.error(error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="nombre" placeholder="nombre" onChange={handleChange} />
            <input type="email" name="correo" placeholder="correo" onChange={handleChange} />
            <input type="password" name="pass" placeholder="contraseña" onChange={handleChange} />
            <button type="submit">Crear usuario</button>
        </form>
    );

};  

export default UsuarioForm;