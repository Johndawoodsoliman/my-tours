import Grid from "@mui/material/Grid";
import ToursCared from "../compoents/ToursCared";
import Container from "@mui/material/Container";
import "./Home.css";
import cities from "../data.json";
import { Typography } from "@mui/material";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <Container className="gool" sx={{ marginY: 5 }}>
        {cities.map((city, cityIndex) => ( // ✅ أضف cityIndex هنا
          <React.Fragment key={cityIndex}> {/* ✅ هنا حط المفتاح */}
            <Typography
              style={{ fontWeight: "bold", textAlign: "center" }}
              variant="h4"
              component="h2"
              marginTop={5}
              marginBottom={3}
            >
              {city.name}
            </Typography>

            <Grid className="cart" container spacing={3}>
              {city.tours.map((tours, index) => (
                <ToursCared tours={tours} key={tours.id || index} /> 
              ))}
            </Grid>
          </React.Fragment>
        ))}
      </Container>
    </React.Fragment>
  );
}
