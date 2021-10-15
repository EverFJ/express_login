import React, { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [date, setDate] = useState("");

  const onEmailChange = e => {
    setEmail(e.target.value);
  };
  const onPasswordChange = e => {
    setPassword(e.target.value);
  };
  const onConfirmPasswordChange = e => {
    setConfirmPassword(e.target.value);
  };
  const onDateChange = e => {
    setDate(e.target.value);
  };
  const handleSignup = () => {};

  return (
    <div>
      <h1>Signup</h1>
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
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={onConfirmPasswordChange}
          placeholder="Confirm your password"
        />
        <input
          type="date"
          name="dateOfBirth"
          value={date}
          onChange={onDateChange}
        />
        <button className="btn btn-primary" onClick={handleSignup}>
          Signup
        </button>
      </form>
    </div>
  );
}
