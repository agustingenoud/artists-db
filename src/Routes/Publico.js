import { Routes, Route } from "react-router-dom";

import LoginPage from "../Pages/LoginPage";
import EquipoPage from "../Pages/EquipoPage";
import NotFoundPage from "../Pages/NotFoundPage";
import ExposicionPage from "../Pages/ExposicionPage";
import ArchivoPage from "../Pages/ArchivoPage";
import TextosPage from "../Pages/TextosPage";

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

          <Route path='/textos' element={<TextosPage />} />

          <Route path='/equipo' element={<EquipoPage />} />

          <Route path='/login' element={<LoginPage />} />

          <Route path='/' exact element={<ExposicionPage />} />

          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default Publico;
