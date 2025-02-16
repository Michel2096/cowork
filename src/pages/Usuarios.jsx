import UsuarioForm from "../components/UsuarioForm";
import { Link } from "react-router-dom";
import App from "../App";

const Usuarios = () => {
    return (
        <div className="container">
            <form>
                <h1>Crea tu usuario</h1>
                <UsuarioForm />
                <Link to="/login">
                    <button className="register-button">
                      Regresar
                    </button>
                </Link>
            </form>
        </div>
    );
}

export default Usuarios;
