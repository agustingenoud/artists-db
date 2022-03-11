import * as React from "react";
import { FormControl, TextField } from "@mui/material";

function FTexto(props) {
  const onInputChange = (e) => {
    console.log(e.target.value);
    props.changeInput(e.target.value);
  };

  return (
    <TextField
      label={props.label}
      multiline
      rows={5}
      defaultValue={props.defaultValue}
      {...props.register}
      onChange={onInputChange}
      sx={{
        width: "85%",
        m: 2,
      }}
    />
  );
}

export default FTexto;
