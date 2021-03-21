import firebase from "firebase/app";
import "firebase/firestore";
import { firestore } from "./firebase/firebase.utils";

const firebstore = firebase.firestore();

firestore
  .collection("users")
  .doc("2JJA6o3JVec5OfeUPOsX")
  .collection("cartItems")
  .doc("xV7IkONWeMCsVSdPWZWH");
firestore.doc("/users/2JJA6o3JVec5OfeUPOsX/cartItems/xV7IkONWeMCsVSdPWZWH");

firestore.collection("/users/2JJA6o3JVec5OfeUPOsX/cartItems");
