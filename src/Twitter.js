import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import { getAuth, signInWithPopup, TwitterAuthProvider } from "firebase/auth";

const Twitter = () => {
  const [use, setUser] = useState([]);

  const TwitterAuthHandler = () => {
    const twitterProvider = new TwitterAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, twitterProvider)
      .then((result) => {
        
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ...
      });
  }
    return (
      <div className="container mt-5">
        <Button className="btn btn-primary" onClick={TwitterAuthHandler}>
          Twitter Authentication
        </Button>
      </div>
    );
};

export default Twitter;