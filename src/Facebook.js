import { Button } from "react-bootstrap";
import React, { useState } from 'react';
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import AuthInitialization from "./AuthInitialization";
import User from "./User";

const Facebook = () => {
    const [user, setUser] = useState([]);
    const facebookAuthHandler = () => {
        AuthInitialization();
         const facebookProvider = new FacebookAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, facebookProvider)
          .then((result) => {
            // The signed-in user info.
            const user = result.user;
            setUser(user);
            
          })
          .catch((error) => {
            // Handle Errors here.
            
            // ...
          });
    }
    return (
      <div className="container mt-5">
        <button className="btn btn-primary" onClick={facebookAuthHandler}>
          Facebook Authentication
        </button>
        {<User user={user}></User>}
      </div>
    );
};

export default Facebook;