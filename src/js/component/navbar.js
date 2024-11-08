import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-container">
      <Link to="/" style={{ color: "transparent" }}>
        <h3>Lista de Contactos de Diego Vega</h3>
      </Link>
      <div className="ml-auto">
        <Link to="/AddContact" className="btn btn-success navbar-button">
          Añadir nuevo contacto
        </Link>
      </div>
    </nav>
  );
};
