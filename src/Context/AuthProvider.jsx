import { React, useState } from "react";
import AuthContext from "./AuthContext";

function AuthProvider(props) {
  const [userLogin, setUserLogin] = useState(false);

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
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
