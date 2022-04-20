import React from "react";
import { Link } from "react-router-dom";

const Eingaben = () => {
  return (
    <div>
      Eingaben
      <button>
        <Link to="/formular">Formular</Link>
      </button>
    </div>
  );
};

export default Eingaben;
