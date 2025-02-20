import React from "react";
import { Link } from "react-router-dom";
import Fondo from './assets/Fondo.png'; 
import llave from './assets/llave.png'; 
import Cerradura from './assets/Cerradura.jpg'; 

import App from "./App";


const Home = () => {
  return (
    <div className="container2">

  <img src={Fondo} alt="IMG" className="background-image" />


  <header className="header">
    <h1 className="titleW">CoWorkLock</h1>
    <Link className="nav" to="/login">Login</Link>
  </header>

  {/* Sección de texto principal */}
  <section className="section">
    <p className="text">
      Controla y monitorea el acceso en tiempo real desde una sola plataforma.
    </p>
    <p className="text-2">
      Vigila tus espacios y <strong>protegé</strong> tu integridad.
    </p>
  </section>

  {/* Sección de botones */}
  <section className="button-section">
    <button className="btn2">Más información</button>
    <button className="btn2">Contratar ahora</button>
  </section>

  <section className="section3">
  <p className="text-sect">COWORKLOCK PARA EMPRESAS INNOVADORAS Y USUARIOS EXIGENTES</p>
  </section>

  <section class="section4">
    <div class="content">
      <h1 class="title4">Optimiza la gestión de accesos</h1>
        <p class="description">
        Simplifica la gestión de accesos con cerraduras inteligentes intuitivas y eficientes, diseñadas para entornos profesionales modernos.
        </p>
    </div>
  </section>

<section class="section5">
  <div class="black-box">
    <div class="text-section">
      <ul class="points">
        <li>Acceso 24/7 a espacios de trabajo modernos.</li>
        <li>Conexión a una comunidad de profesionales innovadores.</li>
        <li>Instalaciones equipadas con tecnología de punta.</li>
        <li>Flexibilidad para adaptarse a tus necesidades.</li>
        <li>Eventos exclusivos para networking y aprendizaje.</li>
      </ul>
     </div>
    <div class="image-section">
      <img src={llave} alt="Imagen de coworking" />
    </div>
  </div>
</section>

<section class="section6">
  <div class="image-section">
    <img src={Cerradura} alt="Imagen de seguridad" />
  </div>
  <div class="text-section">
    <h2>La Importancia de la Seguridad</h2>
    <p>
      La seguridad es un pilar fundamental en cualquier entorno, especialmente en espacios de coworking. Un sistema robusto de seguridad garantiza la protección de los activos, la privacidad de los usuarios y la tranquilidad necesaria para que las empresas puedan enfocarse en su crecimiento.
    </p>
  </div>
</section>

<section class="section7">
  <div class="content7">
    <h1 class="title7">Seguridad sin complicaciones</h1>
    <p class="description7">
      Protege tus espacios con soluciones de acceso inteligente que combinan seguridad y facilidad de uso. Perfecto para empresas exigentes.
    </p>
    <p class="footer7">
      Creado por <strong>MBP Industries</strong> - Tu confianza, nuestra prioridad.
    </p>
  </div>
</section>

<section class="section8">
  <div class="content8">
    <div class="left-column">
      <h1 class="title8">Contáctanos</h1>
      <p class="description8">
        Estamos aquí para ayudarte. Utiliza los datos de contacto a continuación para ponerte en contacto con nosotros.
      </p>
    </div>
    <div class="right-column">
      <div class="contact-info">
        <p><strong>Teléfono:</strong> +52 1 55 4006 0457</p>
        <p><strong>Correo Electrónico:</strong> brendaceo@mbpindustries.com</p>
        <p><strong>Dirección:</strong> Av. Chapultepec n0.35 San Mateo Atarasquillo</p>
      </div>
    </div>
  </div>
</section>

</div>
  );
};

export default Home;