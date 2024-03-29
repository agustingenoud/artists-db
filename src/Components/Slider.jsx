import { React, useContext } from "react";

import Carousel from "react-material-ui-carousel";
import AuthContext from "../Context/AuthContext";

import { Typography, Button, Grid } from "@mui/material";

function Slider(props) {
  const context = useContext(AuthContext);
  console.log(">>>>>>>>>> context");
  console.log(context.color);

  var items = [
    {
      name: "Disidencias Sexuales",
      description:
        "Prácticas artísticas y activistas que cuestionan la forma hegemónica en que sexo y genero son representados socialmente",
      img:
        "https://firebasestorage.googleapis.com/v0/b/devenir-otros-cuerpos.appspot.com/o/images%2FDS.jpg?alt=media&token=4bbda1eb-12f0-4e3e-addc-9d10e37828d4",
      color: context.color.DS,
    },
    {
      name: "Feminismos",
      description:
        "Prácticas artísticas desarrolladas por artistas mujeres o disidencias que buscan cuestionar y subvertir la forma en que el poder se distribuye.",
      img:
        "https://firebasestorage.googleapis.com/v0/b/devenir-otros-cuerpos.appspot.com/o/images%2FFE.jpg?alt=media&token=8d7c8ab5-64df-41e7-a007-7177cc140d19",
      color: context.color.FE,
    },
    {
      name: "Escenas Subterráneas",
      description:
        "Entornos de confluencia de músicos, artistas, poetas, editores y afines que desarrollaron sus prácticas en los márgenes de la cultura institucional o hegemónica.",
      img:
        "https://firebasestorage.googleapis.com/v0/b/devenir-otros-cuerpos.appspot.com/o/images%2FES.jpg?alt=media&token=22bea0cf-fbd8-4930-84f5-b928b14ed979",
      color: context.color.ES,
    },
    {
      name: "Acción Gráfica",
      description:
        "Prácticas que proponen intervenciones en espacios públicos a través del uso de herramientas gráficas de alcance popular.",
      img:
        "https://firebasestorage.googleapis.com/v0/b/devenir-otros-cuerpos.appspot.com/o/images%2FAG.jpg?alt=media&token=3a4a61ef-1f38-4358-88da-c0aa339d043e",
      color: context.color.AG,
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
      <Grid
        item
        xs={12}
        md={5}
        lg={5}
        /* sx={{
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage: `url(${props.item.img}) no-repeat center center fixed`,
        }} */
      >
        <Typography variant='h5'>
          <span
            style={{
              backgroundColor: props.item.color,
              padding: "0.4vh 1.2vw",
              color: "white",
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
      <Grid item xs={12} md={6} lg={3}>
        <img src={props.item.img}></img>
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
