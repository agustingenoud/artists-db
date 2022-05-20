import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import parse from "html-react-parser";

import firebase from "../../Config/firebase";
import { doc, getDoc } from "firebase/firestore";

import {
  Button,
  ImageList,
  ImageListItem,
  Grid,
  Box,
  Typography,
} from "@mui/material";
import SimpleImageSlider from "react-simple-image-slider";

function DetalleArtista() {
  const { id } = useParams();
  const [res, setRes] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        console.log("adentro dhjaskd Try");
        const querySnapshot = await firebase.db
          .collection("artistas")
          .doc(id)
          .get();
        if (querySnapshot.data()) {
          console.log("EL Query > ");
          console.log(querySnapshot.data());
          setRes(querySnapshot.data());
          setLoading(false);
        }
      } catch (e) {
        console.log("ERROR fetchData: ", e);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading . . . </div>;
  } else {
    const imagenes = res.images;
    console.log("RES IMGS");
    console.log(imagenes);
    return (
      <>
        <Grid container>
          <Grid>
            <h1 style={{ margin: "2vh 0vh" }}>{res.nombre}</h1>
            <h2 style={{ color: "#bbbbbb", marginTop: "0%" }}>
              {res.nacimiento}
            </h2>
          </Grid>

          <Grid item xs={12}>
            <img
              style={{ width: "80vw", height: "auto", marginTop: "2vh" }}
              src={res.img}
              alt=''
            />
          </Grid>

          <Grid xs={10} sx={{ marginTop: "8vh" }}>
            {parse(res.bio_corta)}
          </Grid>
          <Grid xs={10} sx={{ marginBottom: "8vh" }}>
            {parse(res.txt_largo)}
          </Grid>

          <Grid sx={{ marginTop: "2vh", marginBottom: "8vh" }}>
            <Typography variant='h6'>Galería</Typography>
            <Box sx={{ height: "80vh", overflowY: "scroll" }}>
              {/* <ImageList cols={3} rowHeight={200}> */}
              <ImageList variant='masonry' cols={3} gap={8}>
                {imagenes.map((imagen) => (
                  <ImageListItem key={imagen.url}>
                    <img
                      src={`${imagen.url}?w=164&h=164&fit=crop&auto=format`}
                      srcSet={`${imagen.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      loading='lazy'
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </Grid>

          <Grid xs={12}>
            {imagenes.length > 0 && (
              <div>
                <SimpleImageSlider
                  width={"88%"}
                  height={"70vh"}
                  images={imagenes}
                  showBullets={true}
                  showNavs={true}
                />
              </div>
            )}
          </Grid>
          <Grid>
            <Button sx={{ color: "black" }}>
              <Link to={"/"}> volver </Link>
            </Button>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default DetalleArtista;
