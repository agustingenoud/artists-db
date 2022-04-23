import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import firebase from "../../Config/firebase";

import DetalleArtista from "./DetalleArtista"

function Detalle() {
  const [detalle, setDetalle] = useState({});
  const [loading, setLoading] = useState({});
  const { id } = useParams();

  console.log(id);

  useEffect(
      ()=>{
          async function request(){
              try{
                  const response = await firebase.db.doc("artistas/"+id)
                  .get()
                  if(querySnapshot.docs){
                      setDetalle(response)
                      setLoading(false)
                  }
              } catch(e){

              }

          }
          request()
      }, [id]
  )
  if(loading){
      return(
          <div>
              Loading . . .
          </div>
      )
  }else{
      return(
        <DetalleArtista datos={detalle.data()}/>

      )
  }
  }
}

export default Detalle