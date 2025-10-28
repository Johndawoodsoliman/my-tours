import React from 'react'
import Container from "@mui/material/Container";
import { Box, Typography } from '@mui/material';
import ImageCollage from './ImageCollage';
import "./Tour.css";



const Tour = () => {
  return (
    <Container className='tou' sx={{ width: "100%", }}>
      <Typography variant="h3" component="h3" sx={{ margin: "20px" }}>
        Iamgeed how good
      </Typography>
          <Box sx={{ display:'flex', width: "100%", height:"100%"}}>
        <img
          src="../../public/2024071108583657974460.jpg"
          alt="shap" height={300} 
                 
              />
              <ImageCollage />
      </Box>
    </Container>
  );
}

export default Tour;
