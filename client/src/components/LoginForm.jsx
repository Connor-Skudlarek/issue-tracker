import React, { useState } from "react";
import "../styles/LoginForm.css";
function LoginForm(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="loginFormEmail">
        Email:
        <input
          id="loginFormEmail"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <br />
      <label htmlFor="loginFormPassword">
        Password:
        <input
          id="loginFormPassword"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
