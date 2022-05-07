import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import firebase from "../../Config/firebase";
import { doc, getDoc } from "firebase/firestore";

import { Button, ImageList, ImageListItem } from "@mui/material";
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

  /* 
const snap = await getDoc(doc(db, 'artistas', '1BE0TWJQ9Ah9XOhtzfns'))

if (snap.exists()) {
  console.log("EL SNAP > " + snap.data())
}
else {
  console.log("No such document")
}
 */
  /*   console.log("el ID es " + id);
  console.log("RES es ");
  console.log(res); */

  if (loading) {
    return <div>Loading . . . </div>;
  } else {
    const imagenes = res.images;
    console.log("RES IMGS");
    console.log(imagenes);
    return (
      <>
        <img style={{ width: "80vw", height: "auto" }} src={res.img} alt='' />
        <h1>{res.nombre}</h1>
        <h5>
          ({res.nacimiento}) {res.ciudad}, {res.pais}
        </h5>
        <p>{res.bio_corta}</p>
        <p>{res.txt_largo}</p>
        <p>{res.nodo}</p>
        {/*   <ImageList
          sx={{ width: "60vw", height: "60vh" }}
          cols={3}
          rowHeight={164}
        >
          {imagenes.map((imagen) => (
            <ImageListItem key={imagen.url}>
              <img
                src={`${imagen.url}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${imagen.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                loading='lazy'
              />
            </ImageListItem>
          ))}
        </ImageList> */}

        {imagenes.length > 0 && (
          <div>
            <SimpleImageSlider
              width={896}
              height={504}
              images={imagenes}
              showBullets={true}
              showNavs={true}
            />
          </div>
        )}
        <Button sx={{ color: "black" }}>
          <Link to={"/"}> volver </Link>
        </Button>
      </>
    );
  }
}

export default DetalleArtista;
