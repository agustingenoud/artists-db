import { useEffect, useState } from "react";

import ArtistaCard from "../Components/Cards/ArtistaCard";
import ObraCard from "../Components/Cards/ObraCard";
import EventoCard from "../Components/Cards/EventoCard";
import Slider from "../Components/Slider";

import { Button, ButtonGroup, Grid } from "@mui/material";

import firebase from "../Config/firebase";

function ExposicionPage() {
  const [loading, setLoading] = useState(true);

  const [fichasGlobal, setFichasGlobal] = useState([]);
  const [fichas, setFichas] = useState([]);

  const [obrasGlobal, setObrasGlobal] = useState([]);
  const [obras, setObras] = useState([]);

  const [eventosGlobal, setEventosGlobal] = useState([]);
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let artistas = [];
      let obras = [];
      let eventos = [];

      try {
        const querySnapshotArtistas = await firebase.db
          .collection("artistas")
          .get();
        const querySnapshotObras = await firebase.db.collection("obras").get();

        const querySnapshotEventos = await firebase.db
          .collection("eventos")
          .get();

        if (querySnapshotArtistas.docs) {
          querySnapshotArtistas.docs.map((query) => {
            let dataMergeArtistas = query.data();
            dataMergeArtistas.id = query.id;
            artistas.push(dataMergeArtistas);
            /* console.log("artistas >>>>>>>>>>>>>>> ");
            console.log(artistas); */
          });
          if (querySnapshotObras.docs) {
            querySnapshotObras.docs.map((query) => {
              let dataMergeObras = query.data();
              dataMergeObras.id = query.id;
              obras.push(dataMergeObras);
            });
          }
          if (querySnapshotEventos.docs) {
            querySnapshotEventos.docs.map((query) => {
              let dataMergeEventos = query.data();
              dataMergeEventos.id = query.id;
              eventos.push(dataMergeEventos);
              console.log(">>>>>>>>>>>>>> querySnapshotEventos.docs.data()");
              console.log(query.data());
            });

            setFichasGlobal(artistas);
            setFichas(artistas);
            setObrasGlobal(obras);
            setObras(obras);
            setEventosGlobal(eventos);
            setEventos(eventos);
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
    let eventosTemp = [];

    console.log("fichasGlobal");
    console.log(fichasGlobal);
    try {
      fichasGlobal.map((ficha) => {
        /* console.log("ficha >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ");
        console.log(ficha); */
        if (ficha.nodos === undefined && typeof ficha.nodos == "undefined") {
          console.log("* NULL *");
        } else {
          if (ficha.nodos[0].idNodo == "FE") {
            console.log("ficha.nodos");
            console.log(ficha.nodos[0].idNodo);
            fichasTemp.push(ficha);
            setFichas(fichasTemp);
            console.log("fichasTemp");
            console.log(fichasTemp);
          }
        }
      });

      obrasGlobal.map((obra) => {
        if (obra.nodos === undefined && typeof obra.nodos == "undefined") {
          console.log("* NULL *");
        } else {
          if (obra.nodos[0].idNodo == "FE") {
            console.log("ficha.nodos");
            console.log(obra.nodos[0].idNodo);
            obrasTemp.push(obra);
            setObras(obrasTemp);
          }
        }
      });
      eventosGlobal.map((evento) => {
        if (evento.nodos === undefined && typeof evento.nodos == "undefined") {
          console.log("* NULL *");
        } else {
          if (eventos.nodos[0].idNodo == "FE") {
            console.log("evento.nodos");
            console.log(evento.nodos[0].idNodo);
            eventosTemp.push(evento);
            setEventos(eventosTemp);
          }
        }
      });
    } catch (e) {
      console.log(e);
    }
  }

  async function handleEsub() {
    let fichasTemp = [];
    let obrasTemp = [];
    let eventosTemp = [];

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

      eventosGlobal.map((evento) => {
        if (evento.nodos === undefined && typeof evento.nodos == "undefined") {
          console.log("* NULL *");
        } else {
          if (eventos.nodos[0].idNodo == "ES") {
            console.log("evento.nodos");
            console.log(evento.nodos[0].idNodo);
            eventosTemp.push(evento);
            setEventos(eventosTemp);
          }
        }
      });
    } catch (e) {
      console.log(e);
    }
  }

  async function handleDsex() {
    let fichasTemp = [];
    let obrasTemp = [];
    let eventosTemp = [];

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

      eventosGlobal.map((evento) => {
        if (evento.nodos === undefined && typeof evento.nodos == "undefined") {
          console.log("* NULL *");
        } else {
          if (eventos.nodos[0].idNodo == "DS") {
            console.log("evento.nodos");
            console.log(evento.nodos[0].idNodo);
            eventosTemp.push(evento);
            setEventos(eventosTemp);
          }
        }
      });
    } catch (e) {
      console.log(e);
    }
  }

  async function handleAgraf() {
    let fichasTemp = [];
    let obrasTemp = [];
    let eventosTemp = [];

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

      eventosGlobal.map((evento) => {
        if (evento.nodos === undefined && typeof evento.nodos == "undefined") {
        } else {
          console.log(evento.nodos[0].idNodo);
          if (evento.nodos[0].idNodo == "AG") {
            eventosTemp.push(evento);
          }
        }
      });
      setEventos(eventosTemp);
    } catch (e) {
      console.log(e);
    }
  }

  async function handleTodo() {
    setFichas(fichasGlobal);
    setObras(obrasGlobal);
    setEventos(eventosGlobal);
  }

  if (loading) {
    return <div>loading...</div>;
  } else {
    return (
      <>
        {/* <Sliders /> */}
        <Slider />

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
          {eventos.map((evento) => (
            <Grid item xs={12} md={6} lg={3}>
              <EventoCard
                ficha={evento}
                nombre={evento.nombre}
                imgSrc={evento.img}
                nodo={evento.nodo}
                introSmall={evento.bio || evento.bio_corta}
                fechaNacimiento={evento.nacimiento}
                fechaFallecimiento={evento.fallecimiento}
                id={evento.id}
              />
            </Grid>
          ))}
          {fichas.map((ficha) => (
            <Grid item xs={12} md={6} lg={3}>
              <ArtistaCard
                ficha={ficha}
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
                ficha={obra}
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
