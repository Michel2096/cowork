import { Link } from "react-router-dom"
import { SaasProvider } from '@saas-ui/react'
import App from "./App";


const Home = () => {
    return (
        <div className="container">
            <header className="header">
                <h1 className="title">CoWorkLock</h1>
                <Link className="nav" to="/login">Login</Link>
            </header>

            <section className="image-text-section">
                <div className="image-container">
                    <img src="path/to/your/image.jpg" alt="Description" className="image" />
                </div>
                <div className="text-container">
                    <p className="text">Este es un texto al lado de una imagen.</p>
                </div>
            </section>
            
            <main className="main-content">
                <p className="text">Este es un texto en color negro.</p>
                <p className="text">Este es otro texto en color negro.</p>
            </main>
            <footer className="footer">
                <p className="text">Footer content here</p>
            </footer>
        </div>
    );
}

export default Home;
