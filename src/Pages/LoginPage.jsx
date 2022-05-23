import { React, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import firebase from "../Config/firebase";
import { useNavigate } from "react-router-dom";

import AuthContext from "../Context/AuthContext";

import FInput from "../Components/Forms/FInput";
import FPassword from "../Components/Forms/FPassword";

function LoginPage() {
  const navigate = useNavigate();

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const context = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("DATA from", data);
    console.log(firebase.auth);

    try {
      const responseUser = await firebase.auth.signInWithEmailAndPassword(
        data.mail,
        data.password
      );
      if (responseUser.user.uid) {
        const userInfo = await firebase.db
          .collection("usuarixs")
          .where("userId", "==", responseUser.user.uid)
          .get();
        console.log("userInfo", userInfo.docs[0]?.data());
        context.loginUser();
        navigate("/");
      }
    } catch (e) {
      console.log("ERROR ", e);
      console.log("ERROR CODE ", e.code);
    }
  };

  return (
    <Grid container sx={{ height: "100vh" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid item xs={12}>
          <h1>Login page</h1>
        </Grid>

        <Grid item xs={12}>
          <FInput
            xs={6}
            label='mail'
            type='Inventario'
            register={{ ...register("mail", { required: true }) }}
            changeInput={(lift) => setMail(lift)}
          />
        </Grid>
        <Grid item xs={12}>
          <FPassword
            xs={6}
            label='password'
            type='Inventario'
            register={{ ...register("password", { required: true }) }}
            changeInput={(lift) => setPassword(lift)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant='contained' type='submit'>
            Login
          </Button>
        </Grid>
      </form>
    </Grid>
  );
}

export default LoginPage;
