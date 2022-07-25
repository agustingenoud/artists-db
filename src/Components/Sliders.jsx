import React from "react";
import { Grid, Typography } from "@mui/material";

function Sliders() {
  return (
    <Grid container spacing={6} sx={{ marginTop: "2vh", paddingLeft: "0vw" }}>
      <Grid item xs={12} md={5} lg={5}>
        <Typography variant='h5'>
          <span
            style={{
              backgroundColor: "#D6711E",
              padding: "0.4vh 1.2vw",
            }}
          >
            Disidencias Sexuales
          </span>
        </Typography>
        <br />
        <Typography variant='h5' sx={{ fontWeight: "bold" }}>
          Prácticas artísticas y activistas que{" "}
          <span style={{ color: "#D6711E" }}>
            cuestionan la forma hegemónica{" "}
          </span>
          en que{" "}
          <span style={{ fontWeight: "lighter" }}>
            {" "}
            <em> sexo y genero</em>
          </span>{" "}
          son representados socialmente.
        </Typography>
      </Grid>
      <Grid item xs={12} md={5} lg={5} sx={{ widht: "10%" }}>
        <img src='https://firebasestorage.googleapis.com/v0/b/devenir-otros-cuerpos.appspot.com/o/images%2Fslider_test.png?alt=media&token=4577c485-83ec-49de-bf76-97070134e16d'></img>
      </Grid>
    </Grid>
  );
}

export default Sliders;
