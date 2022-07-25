import React from "react";
import { InputLabel, Input } from "@mui/material";

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
        sx={{
          width: "85%",
          margin: "2vh 0vw",
        }}
      />
    </>
  );
}

export default FInput;
