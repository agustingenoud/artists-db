import React from "react";
import {
  InputLabel,
  Input,
  Autocomplete,
  TextField,
  Button,
} from "@mui/material";

function FInputMultiple(props) {
  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
    {
      label: "The Lord of the Rings: The Return of the King",
      year: 2003,
    },
    { label: "The Good, the Bad and the Ugly", year: 1966 },
    { label: "Fight Club", year: 1999 },
  ];

  const onInputChange = (e) => {
    props.changeInput(e.target.value);
  };

  return (
    <>
      <InputLabel htmlFor={props.label}> {props.label} </InputLabel>
      <Autocomplete
        disablePortal
        id='combo-box-demo'
        options={top100Films}
        sx={{ width: 300 }}
        {...props.register}
        renderInput={(params) => (
          <TextField
            {...params}
            label='Movie'
            sx={{
              width: "100%",
              margin: "2vh 0vw",
            }}
          />
        )}
      />
      <Button variant='contained'> + </Button>
    </>
  );
}

export default FInputMultiple;
