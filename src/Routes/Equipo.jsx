import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";

import LoginPage from "../Pages/LoginPage";
import ProyectoPage from "../Pages/ProyectoPage";
import NotFoundPage from "../Pages/NotFoundPage";
import HomePage from "../Pages/HomePage";
import ArchivoPage from "../Pages/ArchivoPage";
import TextoPage from "../Pages/TextoPage";
import AltaPage from "../Pages/AltaPage";
import DetalleArtista from "../Components/Detalles/DetalleArtista";
import DetalleObra from "../Components/Detalles/DetalleObra";
import DetalleEvento from "../Components/Detalles/DetalleEvento";

import NavMenu from "../Components/NavMenu";
import Footer from "../Components/Footer";

function Equipo() {
  return (
    <>
      <NavMenu />

      <Container>
        <Routes>
          <Route path='/archivo' element={<ArchivoPage />} />

          <Route path='/proyecto' element={<ProyectoPage />} />

          <Route path='/texto' element={<TextoPage />} />

          <Route path='/login' element={<LoginPage />} />

          <Route path='/altas' element={<AltaPage />} />

          <Route path='/artista/:id' element={<DetalleArtista />} />

          <Route path='/obra/:id' element={<DetalleObra />} />

          <Route path='/evento/:id' element={<DetalleEvento />} />

          <Route path='/' exact element={<HomePage />} />

          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default Equipo;
