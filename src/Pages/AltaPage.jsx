import * as React from "react";
import {
  Box,
  Menu,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";

import AltaArtista from "../Pages/AltasBase/AltaArtista";

function AltaPage() {
  const [tipo, setTipo] = React.useState(" ");
  const handleChange = (event) => {
    console.log("handleChange ", event.target.value);
    setTipo(event.target.value);
    console.log("tipo ", tipo);
  };

  function Cargas(props) {
    switch (props.value) {
      case 1:
        return <AltaArtista />;
      case 2:
        return <h1>Formulario de carga OBRA</h1>;
      case 3:
        return <h1>Formulario de carga EVENTO</h1>;
      default:
        return <h1></h1>;
    }
  }

  return (
    <>
      <h4>Elegí el tipo de carga</h4>
      <FormControl fullWidth sx={{ paddingTop: "0.2vh" }}>
        <Select value={tipo} onChange={handleChange}>
          <MenuItem value={1}>Artista</MenuItem>
          <MenuItem value={2}>Obra</MenuItem>
          <MenuItem value={3}>Evento</MenuItem>
        </Select>
      </FormControl>
      <div className='container'>
        <Cargas value={tipo} />
      </div>
    </>
  );
}

export default AltaPage;
