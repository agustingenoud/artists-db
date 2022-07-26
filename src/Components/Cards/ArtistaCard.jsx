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

  let bio_corta = JSON.parse(props.introSmall).map((line) => (
    <p>{line.children[0].text}</p>
  ));

  const nodo = props.nodo;
  const color = context.color[nodo];

  return (
    <Card>
      <CardActionArea>
        <CardMedia component='img' image={props.imgSrc} alt={props.imgAlt} />
        <Box
          sx={{ backgroundColor: color, width: "100%", height: "1vh" }}
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

          <Typography>{bio_corta}</Typography>
          {/*           <Typography variant='body2' color='text.secondary'>
            {props.id}
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={"/artista/" + props.id}> ver más... </Link>
      </CardActions>
    </Card>
  );
}

export default ArtistaCard;
