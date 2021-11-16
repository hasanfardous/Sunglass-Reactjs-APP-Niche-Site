import { initializeApp } from "firebase/app";
import firebaseConfig from "./Config";

const firebasesAppInit = () => {
    initializeApp(firebaseConfig);
}

export default firebasesAppInit;