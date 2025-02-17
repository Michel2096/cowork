import { Link } from 'react-router-dom';
import CoWork from '../assets/CoWork.png';
import App from '../App';

const Login = () => {
    return (
        <div className="container">
            <form>
                <h1>CoWorkLock</h1>
                <img id="logo" src={CoWork} alt="IMG" /> <br />
                <input type="email" name="correo" placeholder="Correo" id="correo" /> <br />
                <input type="password" name="pass" placeholder="Contraseña" id="pass" />

                <button type="submit" className="login-button">Iniciar sesión</button>

                <p>
                    ¿No tienes cuenta?{" "}
                    <Link to="/form">
                        <button className="register-button">
                            Regístrate                      </button>
                    </Link>

                    <Link to="/form">
                        <button className="register-button">
                            Recuperar contraseña                        </button>
                    </Link>
                </p>
            </form>
            
        </div>
    );
};

export default Login;