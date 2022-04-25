import React from "react";
import { Link } from "react-router-dom";

const Begruessung = () => {
  const today = new Date();

  if (today.getHours() <= 10) {
    return <h1>Guten Morgen!</h1>;
  } else if (today.getHours() > 10 && today.getHours() < 18) {
    return <h1>Guten Tag!</h1>;
  } else if (today.getHours() >= 18) {
    return <h1>Guten Abend!</h1>;
  }
};

const LandingPage = () => {
  const isLoginTrue = JSON.parse(localStorage.getItem("login"));

  const userNotLogin = () => (
    <>
      <h2>Du bist leider noch nicht angemeldet.</h2>
      <h3>
        Wenn Du einen Account hast, dann melde dich bitte{" "}
        <Link to="/login">hier</Link> an.
      </h3>
      <h3>
        Falls Du noch keinen Account hast, dann registriere dich bitte{" "}
        <Link to="/register">hier</Link>.
      </h3>
    </>
  );

  return (
    <div>
      <div style={{ marginTop: "100px" }}>
        {isLoginTrue && isLoginTrue.userLogin ? (
          <Begruessung />
        ) : (
          <>{userNotLogin()}</>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
