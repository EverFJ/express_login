import React from "react";

export default function Admin(props) {
  return (
    <div>
      <h1>Admin</h1>
      {!props.isLogged ? (
        <p>You're not allowed to see this</p>
      ) : (
        <p>User's list</p>
      )}
    </div>
  );
}
