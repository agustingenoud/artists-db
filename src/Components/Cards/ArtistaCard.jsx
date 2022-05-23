import { useContext } from "react";
import AuthContext from "../../Context/AuthContext";

import {
  Button,
  CardActionArea,
  CardActions,
  Typography,
  CardMedia,
  CardContent,
  Card,
  CardHeader,
  Box,
} from "@mui/material";

import parse from "html-react-parser";

import { Link } from "react-router-dom";

function ArtistaCard(props) {
  const context = useContext(AuthContext);

  const nodo = props.nodo;
  const color = context.color[nodo];

  console.log("Imprimo color del NODO > ");
  console.log(color);

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

          {parse(props.introSmall)}

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
