import React from "react";
import ArtistaCard from "./ArtistaCard";
import { Grid } from "@mui/material";

function ExpoCards(props) {
  const { data } = props;
  console.log(data);

  return (
    <Grid item xs={12} md={6} lg={3} key={props.idi}>
      <ArtistaCard
        title={props.nombre}
        imgSrc={props.img}
        categorías={props.nodo}
        bioSmall={props.bio}
      />
    </Grid>
  );
}

export default ExpoCards;
