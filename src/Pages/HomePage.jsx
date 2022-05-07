import { useEffect, useState } from "react";

import ArtistaCard from "../Components/Cards/ArtistaCard";
import ExpoCards from "../Components/Cards/ExpoCards";

import { Button, Grid, Typography, Box } from "@mui/material";

import firebase from "../Config/firebase";

function ExposicionPage() {
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
        <Grid container spacing={6} sx={{ marginTop: "0.1vh" }}>
          {fichas.map((ficha) => (
            <Grid item xs={12} md={6} lg={3}>
              <ArtistaCard
                nombre={ficha.data().nombre}
                imgSrc={ficha.data().img}
                nodo={ficha.data().nodo}
                introSmall={ficha.data().bio || ficha.data().bio_corta}
                fechaNacimiento={ficha.data().nacimiento}
                fechaFallecimiento={ficha.data().fallecimiento}
                id={ficha.id}
              />
            </Grid>
          ))}
        </Grid>
      </>
    );
  }
}
export default ExposicionPage;
