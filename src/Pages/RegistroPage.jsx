import React from "react";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import firebase from "../Config/firebase";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const responseUser = await firebase.auth.createUserWithEmailAndPassword(
        data.email,
        data.password
      );
      console.log("Response User", responseUser.user);
      if (responseUser.user.uid) {
        const document = await firebase.db.collection("usuarixs").add({
          user: data.user,
          userId: responseUser.user.uid,
          email: data.email,
        });
        console.log(document);
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
          <label>usuario</label>
          <input type='user' {...register("user", { required: true })} />
          {errors.user && <span> * campo necesario</span>}
        </div>
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
}

export default LoginPage;
