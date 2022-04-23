import { useEffect, useState } from "react";

import ArtistaCard from "../Components/Cards/ArtistaCard";
import ExpoCards from "../Components/Cards/ExpoCards";

import { Button, Grid, Typography, Box } from "@mui/material";

import { onSnapshot, collection, doc, getDoc } from "firebase/firestore";

import firebaseApp from "../Config/firebase";
import firebase from "../Config/firebase";

function ExposicionPage() {
  const [fichas, setFichas] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await firebase.db.collection("artistas").get();
        setFichas(res.docs);
      } catch (e) {
        console.log("ERROR fetchData: ", e);
      }
    }
    fetchData();
  }, []);

  fichas.map((ficha) => {
    console.log(ficha.id, ficha.data());
    console.log("NODO: ", ficha.data().img);
  });

  return (
    <>
      <Grid container spacing={6} sx={{ marginTop: "0.1vh" }}>
        {fichas.map((ficha) => {
          console.log("FICHA_NUEVA");

          <Grid item xs={12} md={6} lg={3}>
            <ArtistaCard
              title={ficha.data().nodo}
              imgSrc={ficha.data().img}
              nodo={ficha.data().nodo}
              introSmall={ficha.data().nodo}
              fechaNacimiento={ficha.data().nacimiento}
              fechaFallecimiento={ficha.data().fallecimiento}
            />
          </Grid>;
        })}
        <Grid item xs={12} md={6} lg={3}>
          <ArtistaCard
            title='Menem Muertos'
            imgSrc='https://ignoranciacalculada.files.wordpress.com/2019/11/arte_3.jpg'
            nodo='Ácción Gráfica'
            introSmall='a serigrión del cuerafía, una estétilos artistas cca fragmentaria, la fotoco serializuna manera singular todas estas herramientas. Leto a Francismebel formó junco (o Paación o on mayla reivindicacpo y la sexualidad. En este sentido,sas Las Yeg uno de or presencia piadora, laa lo largo de la muestra es Pedro Lemebel. Quizá él condense de ncho) Cauas dipsis. Este dúo creado a finales de loel Apocals 80 se maneja con gran '
            fechaNacimiento='1966'
            fechaFallecimiento='2020'
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <ArtistaCard
            title='Pedro Lemebel'
            imgSrc='https://artishockrevista.com/wp-content/uploads/2016/04/pedro-lemebel-manifiesto-1987.jpeg'
            nodo='Feminismos'
            introSmall='a serigrión del cuerafía, una estétilos artistas cca fragmentaria, la fotoco serializuna manera singular todas estas herramientas. Leto a Francismebel formó junco (o Paación o on mayla reivindicacpo y la sexualidad. En este sentido,sas Las Yeg uno de or presencia piadora, laa lo largo de la muestra es Pedro Lemebel. Quizá él condense de ncho) Cauas dipsis. Este dúo creado a finales de loel Apocals 80 se maneja con gran '
            fechaNacimiento='1966'
            fechaFallecimiento='2020'
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <ArtistaCard
            title='Evento: "dad ad ada da dadad"'
            imgSrc='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F5c%2Fde%2F7a%2F5cde7a9e429df2eaf3f995266ea0db9b.jpg&f=1&nofb=1'
            nodo='Escenas Subterráneas'
            introSmall='a serigrión del cuerafía, una estétilos artistas cca fragmentaria, la fotoco serializuna manera singular todas estas herramientas. Leto a Francismebel formó junco (o Paación o on mayla reivindicacpo y la sexualidad. En este sentido,sas Las Yeg uno de or presencia piadora, laa lo largo de la muestra es Pedro Lemebel. Quizá él condense de ncho) Cauas dipsis. Este dúo creado a finales de loel Apocals 80 se maneja con gran '
            fechaNacimiento='1966'
            fechaFallecimiento='2020'
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <ArtistaCard
            title='Grupo'
            imgSrc='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.oCrNociCzBZ9_CkTv4AUxQAAAA%26pid%3DApi&f=1'
            nodo='Escenas Subterráneas'
            introSmall='a serigrión del cuerafía, una estétilos artistas cca fragmentaria, la fotoco serializuna manera singular todas estas herramientas. Leto a Francismebel formó junco (o Paación o on mayla reivindicacpo y la sexualidad. En este sentido,sas Las Yeg uno de or presencia piadora, laa lo largo de la muestra es Pedro Lemebel. Quizá él condense de ncho) Cauas dipsis. Este dúo creado a finales de loel Apocals 80 se maneja con gran '
            fechaNacimiento='1966'
            fechaFallecimiento='2020'
          />
        </Grid>
      </Grid>
    </>
  );
}

export default ExposicionPage;
