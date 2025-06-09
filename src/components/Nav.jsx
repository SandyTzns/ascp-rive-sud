// src/components/Nav.jsx
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import "../styles/Nav.css";
import { useState } from "react";

export const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/">
          <img src={logo} alt="ASCP Rive Sud logo" />
        </NavLink>
      </div>

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Accueil
        </NavLink>

        <div className="dropdown">
          <span className="dropdown-title">L'Association</span>
          <div className="dropdown-menu">
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/equipe">L'équipe</NavLink>
            <NavLink to="/locaux">Nos Locaux</NavLink>
            <NavLink to="/sponsors">Nos Sponsors</NavLink>
            <NavLink to="/statuts">Statuts</NavLink>
          </div>
        </div>

        <NavLink
          to="/actualites"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Actualités
        </NavLink>

        <div className="dropdown">
          <span className="dropdown-title">Activités</span>
          <div className="dropdown-menu">
            <NavLink to="/sports">Sports</NavLink>
            <NavLink to="/jeux">Jeux</NavLink>
            <NavLink to="/ateliers">Ateliers</NavLink>
            <NavLink to="/langues">Langues</NavLink>
            <NavLink to="/planning">Planning</NavLink>
          </div>
        </div>

        <NavLink
          to="/entraide"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Entraide
        </NavLink>

        <NavLink
          to="/tarifs"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Tarifs
        </NavLink>
      </div>
    </nav>
  );
};
