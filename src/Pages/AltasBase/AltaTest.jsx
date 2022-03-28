import React from "react";
import { Button, Grid } from "@mui/material";
import Titulo from "../../Components/Styles/Titulo";

import { getFirestore, doc, setDoc } from "firebase/firestore";
import { firebaseApp } from "../../Config/firebase";

const firestore = getFirestore();
const special = doc(firestore, "entradas/artistas");
const docData = {
  nombre: "apu",
  nacimiento: "baradero",
  fecha: 1984,
};

function AltaTest() {
  const handleSubmit = async (data) => {
    try {
      //const document = await firebase.db.collection("artistas").add(data);
      console.log(docData);
      await setDoc(special, docData);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Titulo txt='Base Alta Test' />
      </Grid>
      <Grid container xs={12} md={6}>
        <Button
          variant='contained'
          type='submit'
          sx={{ m: 2 }}
          onClick={handleSubmit}
        >
          Ingresar Artista
        </Button>
      </Grid>
    </Grid>
  );
}

export default AltaTest;
