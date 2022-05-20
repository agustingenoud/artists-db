import React from "react";
import { InputLabel, Input, Box } from "@mui/material";

function FPassword(props) {
  const onInputChange = (e) => {
    props.changeInput(e.target.value);
  };

  return (
    <>
      <InputLabel htmlFor={props.label}> {props.label} </InputLabel>
      <Input
        type='password'
        {...props.register}
        onChange={onInputChange}
        sx={{
          m: 2,
          width: "85%",
        }}
      />
    </>
  );
}

export default FPassword;
