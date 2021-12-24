import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCCV_vDMnmWaFJ_KxtS7gXDS5cKRHgC1WE",
  authDomain: "devenir-otros-cuerpos.firebaseapp.com",
  projectId: "devenir-otros-cuerpos",
  messagingSenderId: "405184217522",
  appId: "1:405184217522:web:487d39ca29ea16e7f824ab",
  measurementId: "G-7XRLE6V3M0",
  storageBucket: "gs://devenir-otros-cuerpos.appspot.com",
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
