import {
  Button,
  CardActionArea,
  CardActions,
  Typography,
  CardMedia,
  CardContent,
  Card,
} from "@mui/material";

function ArtistaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component='img'
          height='140'
          image={props.imgSrc}
          alt={props.imgAlt}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {props.nombre}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {props.bioSmall}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Share
        </Button>
      </CardActions>
    </Card>
  );
}

export default ArtistaCard;
