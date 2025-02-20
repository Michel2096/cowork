import  React from "react";
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./pages/Login";
import Usuarios from "./pages/Usuarios";
import Credencial from "./pages/Credencial";
//import UsuarioEdit from "./components/UsuarioEdit";
//import Usuario from "./pages/Usuarios";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/form" element={<Usuarios />} />
      <Route path='/credencial' element={<Credencial />}/>
      
    </Routes>
  </BrowserRouter>
);