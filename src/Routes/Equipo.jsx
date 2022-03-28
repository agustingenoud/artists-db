import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";

import LoginPage from "../Pages/LoginPage";
import EquipoPage from "../Pages/EquipoPage";
import NotFoundPage from "../Pages/NotFoundPage";
import ExposicionPage from "../Pages/ExposicionPage";
import ArchivoPage from "../Pages/ArchivoPage";
import TextosPage from "../Pages/TextosPage";
import AltaArtista from "../Pages/AltasBase/AltaArtista";
import AltaTest from "../Pages/AltasBase/AltaTest";

import NavMenu from "../Components/NavMenu";
import Footer from "../Components/Footer";

function Publico() {
  return (
    <>
      <NavMenu />
      <Container>
        <Routes>
          <Route path='/archivo' element={<ArchivoPage />} />

          <Route path='/textos' element={<TextosPage />} />

          <Route path='/equipo' element={<EquipoPage />} />

          <Route path='/login' element={<LoginPage />} />

          <Route path='/altas/artista' element={<AltaArtista />} />
          <Route path='/altas/test' element={<AltaTest />} />

          <Route path='/' exact element={<ExposicionPage />} />

          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default Publico;
