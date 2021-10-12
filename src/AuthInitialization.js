import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";
const AuthInitialization = () => {
    initializeApp(firebaseConfig);
}

export default AuthInitialization;
