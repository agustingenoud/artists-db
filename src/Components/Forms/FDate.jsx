import * as React from "react";
import { TextField } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

export default function FDate(props) {
  const [value, setValue] = React.useState(null);

  const handleChange = (e) => {
    setValue(e);
    if (e == null) {
      props.changeInput("");
      return;
    }
    props.changeInput(` - ${e.getFullYear().toString()}`);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        views={["year"]}
        label={props.label}
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
