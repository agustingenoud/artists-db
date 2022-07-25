import { useEffect, useState } from "react";

import ArtistaCard from "../Components/Cards/ArtistaCard";
import ObraCard from "../Components/Cards/ObraCard";

import ExpoCards from "../Components/Cards/ExpoCards";
import Sliders from "../Components/Sliders";

import { Button, ButtonGroup, Grid, Typography, Box } from "@mui/material";

import firebase from "../Config/firebase";

function ExposicionPage() {
  const [loading, setLoading] = useState(true);
  const [fichasGlobal, setFichasGlobal] = useState([]);
  const [fichas, setFichas] = useState([]);

  const [obrasGlobal, setObrasGlobal] = useState([]);
  const [obras, setObras] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let artistas = [];
      let obras = [];
      try {
        const querySnapshotArtistas = await firebase.db
          .collection("artistas")
          .get();
        const querySnapshotObras = await firebase.db.collection("obras").get();
        console.log("querySnapshotArtistas.docs >>>>>>>>>>>>>>>> ");
        console.log(querySnapshotArtistas.docs);
        console.log("querySnapshotObras.docs >>>>>>>>>>>>>>>> ");
        console.log(querySnapshotObras.docs);
        if (querySnapshotArtistas.docs) {
          querySnapshotArtistas.docs.map((query) => {
            let dataMergeArtistas = query.data();
            dataMergeArtistas.id = query.id;
            artistas.push(dataMergeArtistas);
            console.log("artistas >>>>>>>>>>>>>>> ");
            console.log(artistas);
          });
          if (querySnapshotObras.docs) {
            querySnapshotObras.docs.map((query) => {
              let dataMergeObras = query.data();
              dataMergeObras.id = query.id;
              obras.push(dataMergeObras);
            });
            setFichasGlobal(artistas);
            setFichas(artistas);
            setObrasGlobal(obras);
            setObras(obras);
            setLoading(false);
          }
        }
      } catch (e) {
        console.log("ERROR fetchData: ", e);
      }
    }
    fetchData();
  }, []);

  async function handleFeminismos() {
    let fichasTemp = [];
    let obrasTemp = [];

    console.log(fichasGlobal);
    try {
      fichasGlobal.map((ficha) => {
        console.log("ficha >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ");
        console.log(ficha);
        if (ficha.nodos === undefined && typeof ficha.nodos == "undefined") {
          console.log("* NULL *");
        } else {
          if (ficha.nodos[0].idNodo == "FE") {
            console.log("ficha.nodos");
            console.log(ficha.nodos[0].idNodo);
            fichasTemp.push(ficha);
          }
        }
      });
      setFichas(fichasTemp);
      console.log("fichasTemp");
      console.log(fichasTemp);

      obrasGlobal.map((obra) => {
        if (obra.nodos === undefined && typeof obra.nodos == "undefined") {
          console.log("* NULL *");
        } else {
          if (obra.nodos[0].idNodo == "FE") {
            console.log("ficha.nodos");
            console.log(obra.nodos[0].idNodo);
            obrasTemp.push(obra);
          }
        }
      });
      setObras(obrasTemp);
    } catch (e) {
      console.log(e);
    }
  }

  async function handleEsub() {
    let fichasTemp = [];
    let obrasTemp = [];

    try {
      fichasGlobal.map((ficha) => {
        if (ficha.nodos === undefined && typeof ficha.nodos == "undefined") {
        } else {
          console.log(ficha.nodos[0].idNodo);
          if (ficha.nodos[0].idNodo == "ES") {
            fichasTemp.push(ficha);
          }
        }
      });
      setFichas(fichasTemp);

      obrasGlobal.map((obra) => {
        if (obra.nodos === undefined && typeof obra.nodos == "undefined") {
        } else {
          console.log(obra.nodos[0].idNodo);
          if (obra.nodos[0].idNodo == "ES") {
            obrasTemp.push(obra);
          }
        }
      });
      setObras(obrasTemp);
    } catch (e) {
      console.log(e);
    }
  }

  async function handleDsex() {
    let fichasTemp = [];
    let obrasTemp = [];

    try {
      fichasGlobal.map((ficha) => {
        if (ficha.nodos === undefined && typeof ficha.nodos == "undefined") {
        } else {
          console.log(ficha.nodos[0].idNodo);
          if (ficha.nodos[0].idNodo == "DS") {
            fichasTemp.push(ficha);
          }
        }
      });
      setFichas(fichasTemp);

      obrasGlobal.map((obra) => {
        if (obra.nodos === undefined && typeof obra.nodos == "undefined") {
        } else {
          console.log(obra.nodos[0].idNodo);
          if (obra.nodos[0].idNodo == "DS") {
            obrasTemp.push(obra);
          }
        }
      });
      setObras(obrasTemp);
    } catch (e) {
      console.log(e);
    }
  }

  async function handleAgraf() {
    let fichasTemp = [];
    let obrasTemp = [];

    try {
      fichasGlobal.map((ficha) => {
        if (ficha.nodos === undefined && typeof ficha.nodos == "undefined") {
        } else {
          console.log(ficha.nodos[0].idNodo);
          if (ficha.nodos[0].idNodo == "AG") {
            fichasTemp.push(ficha);
          }
        }
      });
      setFichas(fichasTemp);

      obrasGlobal.map((obra) => {
        if (obra.nodos === undefined && typeof obra.nodos == "undefined") {
        } else {
          console.log(obra.nodos[0].idNodo);
          if (obra.nodos[0].idNodo == "AG") {
            obrasTemp.push(obra);
          }
        }
      });
      setObras(obrasTemp);
    } catch (e) {
      console.log(e);
    }
  }

  async function handleTodo() {
    setFichas(fichasGlobal);
    setObras(obrasGlobal);
  }

  if (loading) {
    return <div>loading...</div>;
  } else {
    return (
      <>
        <Sliders />
        <ButtonGroup
          variant='contained'
          aria-label='outlined primary button group'
        >
          <Button onClick={handleFeminismos}>Feminismos</Button>
          <Button onClick={handleEsub}>Escenas Subterráneas</Button>
          <Button onClick={handleDsex}>Disidencias Sexuales</Button>
          <Button onClick={handleAgraf}>Acción Gráfica</Button>
          <Button onClick={handleTodo}>Todo</Button>
        </ButtonGroup>
        <Grid container spacing={6} sx={{ marginTop: "0.1vh" }}>
          {fichas.map((ficha) => (
            <Grid item xs={12} md={6} lg={3}>
              <ArtistaCard
                nombre={ficha.nombre}
                imgSrc={ficha.img}
                nodo={ficha.nodo}
                introSmall={ficha.bio || ficha.bio_corta}
                fechaNacimiento={ficha.nacimiento}
                fechaFallecimiento={ficha.fallecimiento}
                id={ficha.id}
              />
            </Grid>
          ))}
          {obras.map((obra) => (
            <Grid item xs={12} md={6} lg={3}>
              <ObraCard
                nombre={obra.nombre}
                imgSrc={obra.img}
                nodo={obra.nodo}
                introSmall={obra.bio || obra.bio_corta}
                fechaNacimiento={obra.nacimiento}
                fechaFallecimiento={obra.fallecimiento}
                id={obra.id}
              />
            </Grid>
          ))}
        </Grid>
      </>
    );
  }
}
export default ExposicionPage;
