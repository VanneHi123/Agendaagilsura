import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Home } from "./Home/Home";
import { Formulario } from "./Formulario/Formulario";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Formulario></Formulario>
  </React.StrictMode>
);
