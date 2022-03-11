import { Typography } from "@mui/material";

function Titulo(props) {
  return (
    <Typography variant='h2' sx={{ p: 4, pl: 0 }}>
      {props.txt}
    </Typography>
  );
}

export default Titulo;
