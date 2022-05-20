import { Routes, Route } from "react-router-dom";

import LoginPage from "../Pages/LoginPage";
import ProyectoPage from "../Pages/ProyectoPage";
import NotFoundPage from "../Pages/NotFoundPage";
import HomePage from "../Pages/HomePage";
import ArchivoPage from "../Pages/ArchivoPage";
import TextoPage from "../Pages/TextoPage";
import DetalleArtista from "../Components/Detalles/DetalleArtista";

import NavMenu from "../Components/NavMenu";
import Footer from "../Components/Footer";

import Container from "@mui/material/Container";

function Publico() {
  return (
    <>
      <NavMenu />
      <Container maxWidth='sm'>
        <Routes>
          <Route path='/archivo' element={<ArchivoPage />} />

          <Route path='/proyecto' element={<ProyectoPage />} />

          <Route path='/texto' element={<TextoPage />} />

          <Route path='/login' element={<LoginPage />} />

          <Route path='/artista/:id' element={<DetalleArtista />} />

          <Route path='/' exact element={<HomePage />} />

          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default Publico;
