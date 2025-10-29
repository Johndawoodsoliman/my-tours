import React from "react";
import { Container, Box, Typography } from "@mui/material";
import ImageCollage from "./ImageCollage";
import "./Tour.css";

const Tour = () => {
  return (
    <Container className="tou" sx={{ width: "100%", padding: "20px" }}>
      <Typography
        variant="h3"
        component="h3"
        sx={{ marginBottom: "20px", fontWeight: "bold" }}
      >
        Imageed how good
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        <img
          src="/2024071108583657974460.jpg"
          alt="Tour visual"
          height={300}
          style={{ borderRadius: "10px" }}
        />

        <ImageCollage />
      </Box>
    </Container>
  );
};

export default Tour;
