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

function ObraCard(props) {
  const context = useContext(AuthContext);

  /* console.log("props.introSmall");
  console.log(props.introSmall); */

  let txt = "";

  if (props.introSmall) {
    txt = JSON.parse(props.introSmall).map((line) => (
      <p>{line.children[0].text}</p>
    ));
  } else {
  }

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

          <Typography
            gutterBottom
            variant='body'
            color='text.primary'
            sx={{ fontFamily: "Roboto Slab", fontSize: "1rem" }}
          >
            {txt}
          </Typography>
          {/*           <Typography variant='body2' color='text.secondary'>
            {props.id}
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={"/obra/" + props.id}> ver más... </Link>
      </CardActions>
    </Card>
  );
}

export default ObraCard;
