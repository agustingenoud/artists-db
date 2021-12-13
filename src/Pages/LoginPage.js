import React from "react";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>mail</label>
          <input type='email' {...register("mail", { required: true })} />
          {errors.mail && <span> * campo necesario</span>}
        </div>

        <div>
          <label>contraseña</label>
          <input type='password' {...register("pass", { required: true })} />
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
