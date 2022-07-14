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
import AltaObra from "../Pages/AltasBase/AltaObra";

function AltaPage() {
  const [tipo, setTipo] = React.useState(0);

  const handleChange = (event) => {
    console.log("handleChange ", event.target.value);
    setTipo(event.target.value);
    console.log("tipo ", tipo);
  };

  function Cargas(props) {
    switch (props.value) {
      case 1:
        return <AltaArtista changeInput={(lift) => setTipo(lift)} />;
      case 2:
        return <AltaObra changeInput={(lift) => setTipo(lift)} />;
      case 3:
        return <h1>Formulario de carga EVENTO</h1>;
      default:
        return <h1></h1>;
    }
  }

  return (
    <>
      <FormControl sx={{ width: "60%", marginTop: "3vh" }}>
        <Select variant='filled' value={tipo} onChange={handleChange}>
          <MenuItem value={0}>Elegir tipo de carga</MenuItem>
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
