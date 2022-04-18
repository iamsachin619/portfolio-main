import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAnQYi_Y-9OQgVxoUJw7ZK4Mvy1-3lProc",
  authDomain: "portfolio-c4ba1.firebaseapp.com",
  projectId: "portfolio-c4ba1",
  storageBucket: "portfolio-c4ba1.appspot.com",
  messagingSenderId: "449890551975",
  appId: "1:449890551975:web:0768e398144b5c1f183382",
  measurementId: "G-FHJRJEX9HX"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const sendPsudoMail = async (data) => {
  await firestore.collection("messagesFromContactUs").add(data);
};
export default firebase;
