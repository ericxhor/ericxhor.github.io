// PortfolioPage.js
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import bg from "./banner-1.jpg";
import banner1 from "../banners/welcome week.jpeg";

function PortfolioPage() {
  return (
    <Box
      className="home-content"
      sx={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "50px 100px" // Add padding to the Box component
      }}
    >
      <Grid container spacing={5}
      >
        <Grid item xs={6}>
          <Typography
            variant="h3"
            component="div"
            sx={{ flexGrow: 1, textAlign: 'left', fontFamily: 'Creato', color: '#FFFFFF', letterSpacing: '0.05em', marginBottom: '200px' }}
          >
            <span style={{ fontWeight: 'bold' }}>My Portfolio.</span>
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: 'left', fontFamily: 'Creato', color: '#FFFFFF' }}
          >
            My portfolio contains all of my design work; whether that's Figma high-fidelity prototypes, informational banners or
            things I've designed for fun. It's the intersection of my creativity, my knowledge on user-centric design and my general interests. I want to be able
            to continue designing in a way that appeals to what people need, and what people love to see.
          </Typography>
        </Grid>

        {/* <Grid item xs={1}>
        </Grid> */}

        <Grid item xs={4}>
          <img src={banner1} style={{ maxWidth: '100%', height: 'auto' }} alt="Banner" />
        </Grid>
        <Grid item xs={4}>
          <img src={banner1} style={{ maxWidth: '100%', height: 'auto' }} alt="Banner" />
        </Grid>
        <Grid item xs={4}>
          <img src={banner1} style={{ maxWidth: '100%', height: 'auto' }} alt="Banner" />
        </Grid>
      </ Grid>
    </ Box>
  );
}

export default PortfolioPage;
