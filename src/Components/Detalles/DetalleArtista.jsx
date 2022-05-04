import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import firebase from "../../Config/firebase";
import { doc, getDoc } from "firebase/firestore";

import { Button } from "@mui/material";

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
  console.log("el ID es " + id);
  console.log("RES es ");
  console.log(res);

  if (loading) {
    return <div>Loading . . . </div>;
  } else {
    return (
      <>
        <img src={res.img} alt='' />
        <h1>{res.nombre}</h1>
        <p>{res.bio}</p>
        <Button sx={{ color: "black" }}>
          <Link to={"/"}> volver </Link>
        </Button>
      </>
    );
  }
}

export default DetalleArtista;
