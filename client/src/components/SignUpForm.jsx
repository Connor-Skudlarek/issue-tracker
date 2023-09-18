import React, { useState } from "react";
import "../styles/SignUpForm.css";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Customer");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // handle form submission here
    const response = await fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, role }),
    });

    if (response.ok) {
      console.log("User registered successfully");
    } else {
      console.error("Error in registration");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="signUpFormEmail">
        Email:
        <input
          id="signUpFormEmail"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <br />
      <label htmlFor="signUpFormPassword">
        Password:
        <input
          id="signUpFormPassword"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <label htmlFor="signUpFormRole">
        Role:
        <select
          id="signUpFormRole"
          name="signUpFormRole"
          value={role}
          onChange={(event) => setRole(event.target.value)}
        >
          <option value="Admin">Admin</option>
          <option value="Developer">Developer</option>
          <option value="Customer">Customer</option>
        </select>
      </label>
      <br />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUpForm;
