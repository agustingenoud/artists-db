import { BrowserRouter as Router } from "react-router-dom";
import Publico from "./Routes/Publico";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyCCV_vDMnmWaFJ_KxtS7gXDS5cKRHgC1WE",
    authDomain: "devenir-otros-cuerpos.firebaseapp.com",
    projectId: "devenir-otros-cuerpos",
    storageBucket: "devenir-otros-cuerpos.appspot.com",
    messagingSenderId: "405184217522",
    appId: "1:405184217522:web:487d39ca29ea16e7f824ab",
    measurementId: "${config.measurementId}",
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log(firebase.firestore());

  return (
    <Router>
      <Publico />
    </Router>
  );
}

export default App;
