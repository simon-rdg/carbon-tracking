import React from "react";
import { Link } from "react-router-dom";
import EingabenBackground from "../../resources/EingabenBackground.png"; // Bild von Unsplash

const Eingaben = () => {
  const isLoginTrue = JSON.parse(localStorage.getItem("login"));

  const renderIfLogin = () => {
    if (isLoginTrue) {
      return (
        <div className="container-fluid" style={{ marginBottom: "20px" }}>
          <h4 className="display-6">
            Hier kannst Du deine Eingaben sehen und neue Eingaben tätigen.
          </h4>

          <br></br>

          <button
            type="button"
            style={{ marginRight: "25px", marginBottom: "20px" }}
            className="btn btn-primary"
          >
            <Link type="button" className="btn btn-primary" to="/formular">
              Formular
            </Link>
          </button>

          <button
            type="button"
            style={{ marginBottom: "20px" }}
            className="btn btn-primary"
          >
            <Link
              type="button"
              className="btn btn-primary"
              to="/vergangeneeingaben"
            >
              alte Eingaben
            </Link>
          </button>

          <img
            src={EingabenBackground}
            className="img-fluid"
            alt="designbild"
          ></img>
        </div>
      );
    } else {
      return (
        <div className="alert alert-warning" role="alert">
          Bitte melde Dich an, um diese Seite nutzen zu können.
        </div>
      );
    }
  };

  return <div>{renderIfLogin()}</div>;
};

export default Eingaben;
