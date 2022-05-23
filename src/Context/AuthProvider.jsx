import { React, useState } from "react";
import AuthContext from "./AuthContext";

function AuthProvider(props) {
  const [userLogin, setUserLogin] = useState(false);

  const color = { FE: "#ce490f", ES: "#ce49a4", DS: "#0998a4", AG: "#480ece" };

  const loginUser = () => {
    setUserLogin(true);
    console.log("USUARIX LOGUEADX!!!");
  };

  const logoutUser = () => {
    setUserLogin(false);
    console.log("LOG_OUT_OK!!!");
  };

  return (
    <AuthContext.Provider
      value={{
        userLogin,
        loginUser,
        logoutUser,
        color,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
