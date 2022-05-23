import * as React from "react";
import { MenuItem } from "@mui/material";
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
      color: "black",
    },
  };

  return (
    <ul style={styles.container}>
      <li style={styles.title}>{props.nacimiento} </li>
      <MenuItem style={styles.nacimiento} as={Link} to={"/artista/" + props.id}>
        {props.nombre}
      </MenuItem>
    </ul>
  );
}

export default LineaIndice;
