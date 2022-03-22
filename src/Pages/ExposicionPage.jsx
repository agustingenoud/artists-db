import ArtistaCard from "../Components/Cards/ArtistaCard";
import { Button, Grid, Typography, Box } from "@mui/material";

function ExposicionPage() {
  return (
    <>
      <Grid container spacing={6} sx={{ marginTop: "0.1vh" }}>
        <Grid item xs={12} md={6} lg={3}>
          <ArtistaCard
            title={`Artista`}
            imgSrc={`https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F6a%2Fdb%2F5c%2F6adb5cb9ca27e48304b56ff5bdf55448.jpg&f=1&nofb=1`}
            imgAlt={`flash`}
            categorías={`lala`}
            bioSmall={`lkajd aldsk kdlskasdl`}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <ArtistaCard
            title={`colectivo`}
            imgSrc={`https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.mhuklLd7bc34Zo8ISkZL9AHaGT%26pid%3DApi&f=1`}
            imgAlt={`flash`}
            categorías={`lala`}
            bioSmall={`lkajd aldsk kdlskasdl`}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <ArtistaCard
            title={`evento`}
            imgSrc={`https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.explicit.bing.net%2Fth%3Fid%3DOIP.eij8Mf1vHfXq98aZM_3-BQAAAA%26pid%3DApi&f=1`}
            imgAlt={`flash`}
            categorías={`lala`}
            bioSmall={`lkajd aldsk kdlskasdl`}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default ExposicionPage;
