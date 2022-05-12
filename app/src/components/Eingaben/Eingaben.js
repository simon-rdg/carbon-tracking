import React from "react";
import { Link } from "react-router-dom";

const Eingaben = () => {
  const isLoginTrue = JSON.parse(localStorage.getItem("login"));

  const renderIfLogin = () => {
    if (isLoginTrue) {
      return (
        <div>
          Hier kannst Du deine Eingaben sehen und neue Eingaben tätigen.
          <br></br>
          Fülle jetzt Dein heutiges Formular aus.
          <br></br>
          <button>
            <Link to="/formular">Formular</Link>
          </button>
          <br></br>
          Hier kannst du Deine Eingaben aus der Vergangenheit sehen und ggf.
          bearbeiten.
          <br></br>
          <button>
            <Link to="/vergangeneeingaben">alte Eingaben</Link>
          </button>
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
