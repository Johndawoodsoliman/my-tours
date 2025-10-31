import React from "react";
import { Container, Box, Typography } from "@mui/material";
import ImageCollage from "./ImageCollage";
import "./Tour.css";

const Tour = () => {
  return (
    <Container
      className="tou"
      sx={{
        width: "100%",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        sx={{
          marginBottom: "20px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Imageed how good
      </Typography>

      <Box className="tour-section"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: 3,
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {/* ✅ الصورة المحلية من مجلد public */}
        <img
          src="/2024071108583657974460.jpg"
          alt="Tour visual"
          height={300}
          style={{
            borderRadius: "10px",
            maxWidth: "100%",
            objectFit: "cover",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          }}
        />

        {/* ✅ مكون الصور الجانبي */}
        <ImageCollage />
      </Box>
    </Container>
  );
};

export default Tour;
