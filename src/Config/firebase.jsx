import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCV_vDMnmWaFJ_KxtS7gXDS5cKRHgC1WE",
  authDomain: "devenir-otros-cuerpos.firebaseapp.com",
  projectId: "devenir-otros-cuerpos",
  messagingSenderId: "405184217522",
  appId: "1:405184217522:web:487d39ca29ea16e7f824ab",
  measurementId: "G-7XRLE6V3M0",
  storageBucket: "gs://devenir-otros-cuerpos.appspot.com",
};

/*
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
*/

firebase.initializeApp(firebaseConfig);
firebase.db = firebase.firestore();
firebase.auth = firebase.auth();

export default firebase;
