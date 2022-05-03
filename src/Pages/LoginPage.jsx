import React from "react";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
/* import firebase from "../Config/firebase";*/
function LoginPage() {
  return (
    <>
      <h1>LOGIN PAGE . . .</h1>
      <h2>La data del lógin péish</h2>
    </>
  );
}
/*
function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const responseUser = await firebase.auth.signInWithEmailAndPassword(
        data.email,
        data.password
      );
      if (responseUser.user.uid) {
        const userInfo = await firebase.db
          .collection("usuarixs")
          .where("userId", "==", responseUser.user.uid)
          .get();
        console.log(userInfo);
      }
    } catch (e) {
      console.log("ERROR ", e);
      console.log("ERROR CODE ", e.code);
    }
  };

  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>mail</label>
          <input type='email' {...register("email", { required: true })} />
          {errors.mail && <span> * campo necesario</span>}
        </div>

        <div>
          <label>contraseña</label>
          <input
            type='password'
            {...register("password", { required: true })}
          />
          {errors.pass && <span> * campo necesario</span>}
        </div>

        <Button variant='contained' type='submit'>
          Inicio
        </Button>
      </form>
    </div>
  );
} */

export default LoginPage;
