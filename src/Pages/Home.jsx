import Grid from "@mui/material/GridLegacy";
import ToursCared from "../compoents/ToursCared";
import Container from "@mui/material/Container";
import  "./Home.css";


import cities from "../data.json";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Container className="gool"  sx={{ marginY: 5 }}>
        {cities.map((city) => (
          <>
            
            <Typography
              variant="h4"
              component="h2"
              marginTop={5}
              marginBottom={3}
            >
              {city.name}
            </Typography>
            <Grid container spacing={3}>
              {city.tours.map((tours, index) => (
                <ToursCared tours={tours} key={index} />
              ))}
            </Grid>
          </>
        ))}
      </Container>
    </>
  );
}
