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

function ArtistaCard(props) {
  return (
    <Card>
      <CardHeader title={props.title} subheader={props.subheader} />
      <CardActionArea>
        <CardMedia
          component='img'
          height='140'
          image={props.imgSrc}
          alt={props.imgAlt}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant='body1'
            color='text.secondary'
            component='div'
          >
            ({props.lugarNacimiento} {props.fechaNacimiento}
            {" - "}
            {props.fechaFallecimiento})
          </Typography>
          <Typography gutterBottom variant='h5' component='div'>
            {props.nodo}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {props.introSmall}
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
