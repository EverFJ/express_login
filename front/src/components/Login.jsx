import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = e => {
    setEmail(e.target.value);
  };
  const onPasswordChange = e => {
    setPassword(e.target.value);
  };
  const handleLogin = e => {};

  return (
    <div>
      <h1>Login</h1>
      <form>
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={email}
          onChange={onEmailChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Your password"
          value={password}
          onChange={onPasswordChange}
        />
        <button className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}
