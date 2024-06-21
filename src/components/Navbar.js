import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const navbarStyle = {
    backgroundImage: `url('https://t3.ftcdn.net/jpg/03/02/04/06/360_F_302040655_IEH9RyDlu7LL8YCLjgL1IskhrpOlmlSv.jpg')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    color:"white"
};
    return (
      <nav className={`navbar navbar-expand-lg`} style={navbarStyle}>
      <div className="container-fluid">
        <Link className="navbar-brand" style={navbarStyle} to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{backgroundColor: "#16fdff"}}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           
            <li className="nav-item">
              <Link className="nav-link" style={navbarStyle} to="/about">
                About
              </Link>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              style={{color:"white"}}
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{ color: 'white' }}>
              {props.mode === "light" ? "Enable Dark Mode" : "Enable Light Mode"}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  title: "Navbar",
};
