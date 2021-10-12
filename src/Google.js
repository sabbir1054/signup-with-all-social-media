
import { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import AuthInitialization from "./AuthInitialization";
import User from './User';




const Google = () => {
    const [user, setUser] = useState([]);
    const GoogleAuthHandler = () => {
        AuthInitialization();
        const googleProvider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, googleProvider)
          .then((result) => {
            setUser(result.user);
            
          })
          .catch((error) => {
            // Handle Errors here.
           
            // ...
          });

    }
    return (
      <div className="container mt-5">
        <button className="btn btn-primary" onClick={GoogleAuthHandler}>
          Google Authentication
            </button>
            {
                <User user={user}></User>
            }
      </div>
    );
};

export default Google;