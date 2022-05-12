import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import SvgMain from "../iconComponents/Main";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

import Button from "@material-ui/core/Button";

const NavBar = ({ logoutUser, setLogoutUser }) => {
  const [login, setLogin] = useState("");

  useEffect(() => {
    hydrateStateWithLocalStorage();
  }, [logoutUser]);

  const logout = () => {
    localStorage.removeItem("login");
    setLogoutUser(true);
  };

  const hydrateStateWithLocalStorage = () => {
    if (localStorage.hasOwnProperty("login")) {
      let value = localStorage.getItem("login");
      try {
        value = JSON.parse(value);
        setLogin(value);
      } catch (e) {
        setLogin("");
      }
    }
  };

  return (
    // CSS Benennung überprüfen
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div>
          <SvgMain />
        </div>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Carbon-Tracker
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/informationen"
                >
                  <Button>Informationen</Button>
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/eingaben"
                >
                  <Button>Eingaben</Button>
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/statistik"
                >
                  <Button>Statistik</Button>
                </Link>
              </li>
            </ul>
          </div>
          <header style={{ marginTop: "20px" }}>
            {!logoutUser && login && login.userLogin ? (
              <Button
                style={{ width: "150px" }}
                variant="contained"
                endIcon={<LogoutIcon color="primary" />}
                color="default"
                onClick={logout}
              >
                Abmelden
              </Button>
            ) : (
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button
                  style={{ width: "150px" }}
                  variant="contained"
                  startIcon={<LoginIcon color="primary" />}
                  color="default"
                >
                  Anmelden
                </Button>
              </Link>
            )}
          </header>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
