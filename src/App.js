import React from "react";

import { BrowserRouter, Route, Link } from "react-router-dom";

import Eingaben from "./components/Eingaben/Eingaben";
import Formular from "./components/Eingaben/Formular";
import Nachbearbeitung from "./components/Eingaben/Nachbearbeitung";

import Informationsuebersicht from "./components/Informationen/InformationsUebersicht";

import StatistikUebersicht from "./components/Statistik/StatistikUebersicht";

import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <NavBar />
          <Route path="/" exact component={LandingPage} />
          <Route path="/eingaben" component={Eingaben} />
          <Route path="/eingaben/formular" component={Formular} />
          <Route path="/eingaben/nachbearbeitung" component={Nachbearbeitung} />
          <Route
            path="/informationen"
            exact
            component={Informationsuebersicht}
          />
          <Route path="/statistik" exact component={StatistikUebersicht} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
