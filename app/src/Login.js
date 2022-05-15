// Dieser Code wurde von https://github.com/trickjsprogram/react-jwt-auth übernommen und leicht modifiziert.

import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import axiox from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Login = ({ setLogoutUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  let history = useHistory();

  const login = (e) => {
    e.preventDefault();
    axiox
      .post("http://localhost:3002/api/auth/login", {
        email,
        password,
      })
      .then((response) => {
        console.log("response", response);
        localStorage.setItem(
          "login",
          JSON.stringify({
            userLogin: true,
            token: response.data.access_token,
          })
        );
        setError("");
        setEmail("");
        setPassword("");
        setLogoutUser(false);
        history.push("/");
      })
      .catch((error) => setError(error.response.data.message));
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <h2>Login Page</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form noValidate autoComplete="off" onSubmit={login}>
        <TextField
          id="username"
          label="Username"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <TextField
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <Button
          style={{ width: "100px" }}
          variant="contained"
          color="primary"
          type="submit"
        >
          Login
        </Button>
      </form>
      <p>
        Wenn Du noch keinen Account hast, registriere dich{" "}
        <Link to="/register">hier</Link>
      </p>
    </div>
  );
};

export default Login;
