import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";

import LoginPage from "../Pages/LoginPage";
import ProyectoPage from "../Pages/ProyectoPage";
import NotFoundPage from "../Pages/NotFoundPage";
import HomePage from "../Pages/HomePage";
import IndicePage from "../Pages/IndicePage";
import TextoPage from "../Pages/TextoPage";
import AltaArtista from "../Pages/AltasBase/AltaArtista";
import AltaTest from "../Pages/AltasBase/AltaTest";

import NavMenu from "../Components/NavMenu";
import Footer from "../Components/Footer";

function Equipo() {
  return (
    <>
      <NavMenu />
      <Container>
        <Routes>
          <Route path='/indice' element={<IndicePage />} />

          <Route path='/proyecto' element={<ProyectoPage />} />

          <Route path='/texto' element={<TextoPage />} />

          <Route path='/login' element={<LoginPage />} />

          <Route path='/altas/artista' element={<AltaArtista />} />
          <Route path='/altas/test' element={<AltaTest />} />

          <Route path='/' exact element={<HomePage />} />

          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default Equipo;
