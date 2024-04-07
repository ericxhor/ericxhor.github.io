import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import bg from "../../images/banner-temp.png";
import "../../fonts/fonts.css"; // Import the CSS file

function HeroSection() {
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
        justifyContent: "center"
      }}
    >
      <Grid container spacing={1} alignItems="center"
      >
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={10}>
          <Typography
            variant="h2"
            component="div"
            sx={{ flexGrow: 1, textAlign: 'center', fontFamily: 'Creato', color: '#EBE9DD' }}
          >
            <div>
              <span style={{ fontWeight: 'bold', letterSpacing: '0.025em'  }}>Welcome</span>
              —  My website is a collection of
            </div>
          </Typography>

          <Typography
            variant="h2"
            component="div"
            sx={{ flexGrow: 1, textAlign: 'right', fontFamily: 'Creato', color: '#EDECEB', marginRight: '140px' }}
          >
            <div>
              my designs,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;my code,
            </div>
          </Typography>

          <Typography
            variant="h2"
            component="div"
            sx={{ flexGrow: 1, textAlign: 'left', fontFamily: 'Creato', color: '#EDECEB', marginLeft: '140px' }}
          >
            my resume and
          </Typography>

          <Typography
            variant="h2"
            component="div"
            sx={{ flexGrow: 1, textAlign: 'left', fontFamily: 'Creato', color: '#EDECEB', marginLeft: '280px' }}
          >
            <div>
              my general interests.
            </div>
          </Typography>
        </Grid>
        <Grid item xs={1}></Grid>
      </ Grid>
    </ Box>
  );
}

export default HeroSection;
