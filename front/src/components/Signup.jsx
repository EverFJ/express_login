import React, { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [date, setDate] = useState("");

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
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Your password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          placeholder="Confirm your password"
        />
        <input
          type="date"
          name="dateOfBirth"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSignup}>
          Signup
        </button>
      </form>
    </div>
  );
}
