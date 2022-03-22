import React from "react";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <button>
        <Link to="/">Home</Link>
      </button>
      <button>
        <Link to="/informationen">Informationen</Link>
      </button>
      <button>
        <Link to="/eingaben">Eingaben</Link>
      </button>
      <button>
        <Link to="/statistik">Statistik</Link>
      </button>
    </div>
  );
};

export default NavBar;
