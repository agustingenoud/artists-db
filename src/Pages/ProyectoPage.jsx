import { Typography, Grid } from "@mui/material";

function ProyectoPage() {
  return (
    <Grid container spacing={6} sx={{ marginTop: "0.1vh" }}>
      <Grid item xs={12} md={8} lg={8}>
        <Typography variant='h6' sx={{ fontWeight: "light" }}>
          Experiencias de resistencia de los años ochenta en Uruguay
        </Typography>
      </Grid>
      <Grid item xs={12} md={8} lg={8}>
        <Typography variant='h5' sx={{ fontWeight: "bold" }}>
          Devenir otros cuerpos es un proyecto de investigación que tiene como
          objetivo rastrear escenas y prácticas artísticas desarrolladas en
          Uruguay en el entorno de los años ochenta a través de la reunión de un
          conjunto de materiales documentales.
        </Typography>
      </Grid>
      <Grid item xs={12} md={8} lg={8}>
        <Typography display='inline' variant='h5' sx={{ fontWeight: "bold" }}>
          El resultado de este trabajo culmina en esta exposición{" "}
        </Typography>
        <Typography
          display='inline'
          variant='h5'
          sx={{
            fontStyle: "italic",
            fontWeight: "light",
            fontFamily: "Roboto slab",
          }}
        >
          web-archivo.
        </Typography>
      </Grid>
      <Grid item xs={12} md={8} lg={8}>
        <Typography>
          La iniciativa propone ampliar la investigación realizada para Perder
          la forma humana. Una imagen sísmica de los ochenta en América Latina.
          Este fue un proyecto de investigación y exposición curado por la Red
          Conceptualismos del Sur (RedCSur) y realizado en el Museo Nacional
          Centro de Arte Reina Sofía (MNCARS) en el 2012. Perder la forma humana
          tuvo como objetivo central realizar un mapa exploratorio de las
          prácticas artísticas y políticas vinculadas a experiencias de
          resistencia y libertad, en las que el recurso del cuerpo como soporte
          artístico y político fue prioritario.
        </Typography>
      </Grid>
      <Grid item xs={12} md={8} lg={8}>
        <Typography>
          Devenir otros cuerpos se propone identificar casos de estudio de
          prácticas artísticas y políticas, que ocurrieron tanto en Uruguay como
          en el resto de América Latina, en el período de dictaduras
          cívico-militar y su posterior transición a la democracia, a partir de
          problemas y preguntas comunes en la región.
        </Typography>
      </Grid>
      <Grid item xs={12} md={8} lg={8}>
        <Typography>
          Con esta inciativa se busca facilitar herramientas y elementos para
          profundizar el estudio del período en Uruguay, y darle lugar en la
          historia a aquellas prácticas que frente al colapso social y político
          desarrollaron nuevas formas de subjetivación y agenciamiento.
        </Typography>
      </Grid>
      <Grid item xs={12} md={8} lg={8}>
        <Typography variant='h5'>
          <span
            style={{
              backgroundColor: "#D6711E",
              padding: "0.4vh 1.2vw",
            }}
          >
            Equipo
          </span>
        </Typography>
      </Grid>
      <Grid item xs={12} md={8} lg={8}>
        <strong>Curaduría e investigación: </strong>{" "}
        <em>Agustina Rodríguez, May Puchet, Eugenia González</em> <br />
        <strong>Investigador asociado: </strong> <em>Diego Pérez</em> <br />
        <strong> Investigadores invitados: </strong> <em>. . .</em> <br />
        <strong>Programación: </strong> <em>Agustin Genoud</em> <br />
        <strong>Diseño: </strong> <em>Sergio Sosa</em> <br />
        <strong>Educación: </strong> <em>Pablo Pérez </em> <br />
        <strong>Diagramación revistas: </strong> <em>Jerónimo Bujman </em>{" "}
        <br />
      </Grid>
    </Grid>
  );
}

export default ProyectoPage;
