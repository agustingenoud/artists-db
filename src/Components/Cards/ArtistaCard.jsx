import { useContext } from "react";
import AuthContext from "../../Context/AuthContext";

import {
  CardActionArea,
  CardActions,
  Typography,
  CardMedia,
  CardContent,
  Card,
  Box,
} from "@mui/material";

import { Link } from "react-router-dom";

function ArtistaCard(props) {
  const context = useContext(AuthContext);
  console.log("ArtistaCard props");
  console.log(props);

  let bio_corta = "";
  if (props.introSmall) {
    bio_corta = JSON.parse(props.introSmall).map((line) => (
      <p>{line.children[0].text}</p>
    ));
  }

  const nodo = props.nodo;
  const color = context.color[nodo];

  return (
    <Card>
      <CardActionArea>
        <CardMedia component='img' image={props.imgSrc} alt={props.imgAlt} />
        <Box
          sx={{ backgroundColor: color, width: "100%", height: "0.4vh" }}
        ></Box>
        <CardContent>
          <Typography
            gutterBottom
            variant='h6'
            color='text.primary'
            component='div'
          >
            <strong>{props.nombre}</strong>
          </Typography>
          <Typography gutterBottom variant='body2' sx={{ color: "gray" }}>
            <strong>{props.ficha.nacimiento}</strong>
          </Typography>

          <Typography>{bio_corta}</Typography>
          {/*           <Typography variant='body2' color='text.secondary'>
            {props.id}
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link
          underline='none'
          to={"/artista/" + props.id}
          style={{ textDecoration: "none" }}
        >
          <Typography
            to={"/artista/" + props.id}
            sx={{ color: color, textDecoration: "none" }}
          >
            {" "}
            ver más...{" "}
          </Typography>
        </Link>
      </CardActions>
    </Card>
  );
}

export default ArtistaCard;
