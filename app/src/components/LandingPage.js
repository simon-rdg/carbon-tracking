import tagesschau from "apis/tagesschau";
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

const Tagesschau = async () => {
  // const response = await tagesschau.get(
  //   "/search/?searchText=klimawandel&pageSize=5"
  // );
  // console.log(response);

  return (
    <div>
      <h3>aktuelle Informationen zum Thema Klimawandel: </h3>
      <br></br>
    </div>
  );
};

const LandingPage = () => {
  const isLoginTrue = JSON.parse(localStorage.getItem("login"));

  const userNotLogin = () => (
    <>
      <div className="alert alert-warning" role="alert">
        Du bist leider noch nicht angemeldet:{" "}
        <Link className="alert-link" to="login">
          Hier anmelden
        </Link>{" "}
        oder{" "}
        <Link className="alert-link" to="register">
          jetzt registrieren
        </Link>
        .
      </div>
    </>
  );

  return (
    <div>
      <div>
        {isLoginTrue && isLoginTrue.userLogin ? (
          <div>
            <div className="alert alert-success" role="alert">
              Du bist erfolgreich angemeldet!
            </div>
            <Begruessung />
          </div>
        ) : (
          <>{userNotLogin()}</>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
