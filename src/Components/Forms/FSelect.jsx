import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function FSelect(props) {
  const [show, setShow] = React.useState("");

  const handleChange = (e) => {
    setShow(e.target.value);
    console.log(e.explicitOriginalTarget.innerText);
    props.changeInput(e.explicitOriginalTarget.innerText);
  };

  const items = props.items;

  return (
    <>
      <InputLabel id='nodos'>{props.label}</InputLabel>
      <Select
        value={show}
        labelId='nodos'
        {...props.register}
        onChange={handleChange}
        sx={{
          width: "85%",
        }}
        variant='filled'
      >
        {items.map(({ nodo, value }) => (
          <MenuItem key={value} value={value}>
            {nodo}
          </MenuItem>
        ))}
      </Select>
    </>
  );
}

export default FSelect;
