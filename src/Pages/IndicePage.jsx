import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import firebase from "../Config/firebase";

import ArtistaCard from "../Components/Cards/ArtistaCard";
import LineaIndice from "../Components/Styles/LineaIndice";

function IndicePage() {
  const [loading, setLoading] = useState(true);
  const [fichas, setFichas] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const querySnapshot = await firebase.db.collection("artistas").get();
        if (querySnapshot.docs) {
          setFichas(querySnapshot.docs);
          setLoading(false);
        }
      } catch (e) {
        console.log("ERROR fetchData: ", e);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>loading...</div>;
  } else {
    return (
      <>
        <Grid container>
          <Grid item xs={12} md={12} lg={12}>
            <h1>Índice de entradas</h1>
          </Grid>
          {fichas.map((ficha) => (
            <Grid item xs={12} md={12} lg={12}>
              <LineaIndice
                nombre={ficha.data().nombre}
                nodo={ficha.data().nodo}
                nacimiento={ficha.data().nacimiento}
              />
            </Grid>
          ))}
        </Grid>
      </>
    );
  }
}

export default IndicePage;
