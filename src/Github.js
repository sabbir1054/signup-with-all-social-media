import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import AuthInitialization from "./AuthInitialization";
import User from "./User";
const Github = () => {
  const [user, setUser] = useState([]);
  const GitHubAuth = () => {
    AuthInitialization();
    const GithubProvider = new GithubAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, GithubProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        // Handle Errors here.
        // ...
      });
  };
  return (
    <div className="container mt-5">
      <button className="btn btn-primary" onClick={GitHubAuth}>
        GitHub Authentication
      </button>
      {<User user={user}></User>}
    </div>
  );
};

export default Github;
