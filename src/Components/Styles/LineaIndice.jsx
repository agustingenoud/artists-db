import * as React from "react";

import { Link } from "react-router-dom";

function LineaIndice(props) {
  console.log(props);

  const styles = {
    container: {
      display: "grid",
      gridTemplateColumns: "1fr 9fr 1fr",
      listStyleType: "none",
      borderTop: "1px solid black",
    },
    title: {
      fontWeight: "bold",
      fontSize: "1.6rem",
      textAlign: "left",
      marginTop: "1rem",
      marginBottom: "0px",
    },
    nacimiento: {
      fontWeight: "bold",
      fontSize: "1.6rem",
      textAlign: "left",
      marginTop: "1rem",
      marginBottom: "0px",
    },
  };

  return (
    <ul style={styles.container}>
      <li style={styles.title}>{props.nacimiento} </li>
      <li style={styles.nacimiento}>{props.nombre} </li>
      <li>
        <Link to={"/artista/" + props.id}>ver +</Link>
      </li>
    </ul>
  );
}

export default LineaIndice;
