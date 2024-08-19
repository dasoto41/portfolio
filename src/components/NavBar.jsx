import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/navBar.css";
import "../styles/mediaquery.css";

import daniela from "../components/img/unnamed.jpg";
import Avatar from "@mui/material/Avatar";

const NavBar = () => {
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);
  const handleNavbarToggle = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };

  const closeNavbar = () => {
    setIsNavbarCollapsed(true);
  };

  return (
    <nav className="navbar-dark position-absolute container">
      <div className="width-button container">
        <button
          className="navbar-toggler border-info"
          type="button"
          onClick={handleNavbarToggle}
          aria-controls="navbarSupportedContent"
          aria-expanded={!isNavbarCollapsed}
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div
          className={`collapse navbar-collapse ${
            isNavbarCollapsed ? "" : "show"
          }`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link
                className="nav-link active letter"
                aria-current="page"
                to="/"
                onClick={closeNavbar}
              >
                Inicio
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className="nav-link active letter"
                to="/AcercadeMi"
                onClick={closeNavbar}
              >
                Acerca de Mi
                <Avatar className="avatar" alt="Daniela" src={daniela} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active letter"
                to="/Portfolio"
                onClick={closeNavbar}
              >
                Ver Proyectos!
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active letter"
                href="https://drive.google.com/file/d/14EYN3xJUM0y6dUoePJCftGeCljCj5Tuc/view"
                target="_blank"
                rel="noreferrer"
                onClick={closeNavbar}
              >
                CV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
