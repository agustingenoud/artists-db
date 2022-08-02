import React from "react";
import Carousel from "react-material-ui-carousel";
import { Typography, Button, Grid } from "@mui/material";

function Slider(props) {
  var items = [
    {
      name: "Disidencias Sexuales",
      description:
        "Prácticas artísticas y activistas que cuestionan la forma hegemónica en que sexo y genero son representados socialmente",
    },
    {
      name: "Feminismos",
      description: "FE",
    },
    {
      name: "Escenas Subterráneas",
      description: "ES",
    },
    {
      name: "Acción Gráfica",
      description: "AG",
    },
  ];

  return (
    <Grid sx={{ width: "100%", marginTop: "6vh", marginBottom: "6vh" }}>
      <Carousel>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </Grid>
  );
}

function Item(props) {
  return (
    <Grid
      container
      sx={{ width: "100%", marginTop: "2vh", paddingLeft: "0vw" }}
    >
      <Grid item xs={12} md={5} lg={5}>
        <Typography variant='h5'>
          <span
            style={{
              backgroundColor: "#D6711E",
              padding: "0.4vh 1.2vw",
            }}
          >
            {props.item.name}
          </span>
        </Typography>

        <br />
        <Typography variant='h5' sx={{ fontWeight: "bold" }}>
          {props.item.description}
        </Typography>
        <br />
        <br />
        <Button variant='contained'>Ver Más</Button>
      </Grid>
      <Grid item xs={12} md={5} lg={5} sx={{ widht: "10%" }}>
        <img src='https://firebasestorage.googleapis.com/v0/b/devenir-otros-cuerpos.appspot.com/o/images%2Fslider_test.png?alt=media&token=4577c485-83ec-49de-bf76-97070134e16d'></img>
      </Grid>
    </Grid>
  );
}

function disidencias() {
  return (
    <Typography variant='h5' sx={{ fontWeight: "bold" }}>
      Prácticas artísticas y activistas que{" "}
      <span style={{ color: "#D6711E" }}>cuestionan la forma hegemónica </span>
      en que{" "}
      <span style={{ fontWeight: "lighter" }}>
        {" "}
        <em> sexo y genero</em>
      </span>{" "}
      son representados socialmente.
    </Typography>
  );
}

export default Slider;
