import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC0lida8YwUjymhL_P0Onq07mL4_ZdDBQ4",
  authDomain: "crowndb-a58a7.firebaseapp.com",
  projectId: "crowndb-a58a7",
  storageBucket: "crowndb-a58a7.appspot.com",
  messagingSenderId: "300467979205",
  appId: "1:300467979205:web:db32689406252e7025c1ac",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
