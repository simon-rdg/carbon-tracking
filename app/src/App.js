import React, { useState } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Eingaben from "./components/Eingaben/Eingaben";
import Formular from "./components/Eingaben/Formular";
import DetailFormular from "components/Eingaben/DetailFormular";
import Nachbearbeitung from "./components/Eingaben/Nachbearbeitung";
import VergangeneEingaben from "./components/Eingaben/VergangeneEingaben";

import Informationsuebersicht from "./components/Informationen/InformationsUebersicht";

import StatistikUebersicht from "./components/Statistik/StatistikUebersicht";

import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";

import Login from "./Login";
import Register from "./Register";

function App() {
  const [logoutUser, setLogoutUser] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <div>
          <Route exact path="/">
            <NavBar logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
            <LandingPage logoutUser={logoutUser} />
          </Route>
          <Route path="/login">
            <Login setLogoutUser={setLogoutUser} />
          </Route>
          <Route path="/register">
            <Register setLogoutUser={setLogoutUser} />
          </Route>

          <Route path="/eingaben" component={Eingaben}>
            <NavBar logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
            <Eingaben />
          </Route>

          <Route path="/formular" component={Formular}>
            <NavBar logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
            <Formular />
          </Route>

          <Route path="/vergangeneeingaben" component={VergangeneEingaben}>
            <NavBar logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
            <VergangeneEingaben />
          </Route>

          <Route path="/detailformular" component={DetailFormular}>
            <NavBar logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
            <DetailFormular />
          </Route>

          <Route path="/eingaben/nachbearbeitung" component={Nachbearbeitung}>
            <NavBar logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
            <Nachbearbeitung />
          </Route>

          <Route path="/informationen" exact component={Informationsuebersicht}>
            <NavBar logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
            <Informationsuebersicht />
          </Route>
          <Route path="/statistik" exact component={StatistikUebersicht}>
            <NavBar logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
            <StatistikUebersicht />
          </Route>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
