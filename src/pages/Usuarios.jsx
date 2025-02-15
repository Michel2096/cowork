import UsuarioForm from "../components/UsuarioForm";
import { Link } from "react-router-dom";

const Usuarios = () =>{
    return(
        <div>
            <h1>Formulario</h1>

            <UsuarioForm/>

            <Link to="/login">Regresar</Link>
        </div>
    );
}

export default Usuarios;