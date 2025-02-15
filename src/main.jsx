import  React from "react";
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Usuarios from "./pages/Usuarios";
//import UsuarioEdit from "./components/UsuarioEdit";
//import Usuario from "./pages/Usuarios";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/form" element={<Usuarios />} />
    </Routes>
  </BrowserRouter>
);