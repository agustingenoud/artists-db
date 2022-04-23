import React from "react";

function DetalleArtista(props) {
  const { datos } = props;

  return (
    <>
      <h1>ESTE ES</h1>
      <p>un test de cosas</p>
      <img src='' alt='' />
      {console.log("For mapping: ", datos)}
    </>
  );
}

export default DetalleArtista;
