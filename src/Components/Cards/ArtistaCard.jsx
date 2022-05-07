import {
  Button,
  CardActionArea,
  CardActions,
  Typography,
  CardMedia,
  CardContent,
  Card,
  CardHeader,
} from "@mui/material";

import { Link } from "react-router-dom";

function ArtistaCard(props) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia component='img' image={props.imgSrc} alt={props.imgAlt} />

        <CardContent>
          <Typography
            gutterBottom
            variant='h6'
            color='text.primary'
            component='div'
          >
            <strong>{props.nombre}</strong>
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {props.introSmall}
          </Typography>
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
