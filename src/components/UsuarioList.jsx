import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const UsuarioList = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/api/usuarios")
            .then(response => setUsuarios(response.data)).catch(error => console.error(error));
    }, []);

    return (
        <div>

        </div>
    )
}