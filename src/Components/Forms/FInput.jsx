import React from "react";
import { InputLabel, Input, Box } from "@mui/material";

function FInput(props) {
  const onInputChange = (e) => {
    props.changeInput(e.target.value);
  };

  return (
    <>
      <InputLabel htmlFor={props.label}> {props.label} </InputLabel>
      <Input
        type={props.type || "text"}
        {...props.register}
        onChange={onInputChange}
      />
    </>
  );
}

export default FInput;
