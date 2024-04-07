import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";

import one from '../../images/home1_1.jpg'

function AboutHome() {
  return (
    <Box sx={{ backgroundColor: '#EDECEB', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Grid container spacing={0} alignItems="center">
      <Grid item xs={2}></Grid>
      <Grid item xs={5}>
        <Typography
          lineHeight={1.25}
          fontSize={55}
          component="div"
          sx={{ textAlign: 'left', fontFamily: 'Creato', color: '#375879'}}
        >
          I hope you love
        </Typography>
        <Typography
          lineHeight={1.25}
          fontSize={55}
          component="div"
          sx={{ textAlign: 'left', fontFamily: 'Creato', color: '#375879', marginLeft: '50px'}}
        >
          <span style={{ fontStyle: 'italic' }}>exploring</span> my website
        </Typography>
        <Typography
          lineHeight={1.25}
          fontSize={55}
          component="div"
          sx={{ textAlign: 'left', fontFamily: 'Creato', color: '#375879'}}
        >
          just as much as I loved
        </Typography>
        <Typography
          lineHeight={1.25}
          fontSize={55}
          component="div"
          sx={{ textAlign: 'left', fontFamily: 'Creato', color: '#375879', marginLeft: '100px'}}
        >
          <span style={{ fontStyle: 'italic' }}>developing</span> it.
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={one} style={{ maxWidth: '60%', height: 'auto'}} alt="one" />
        </div>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  </Box>
  
  );
}

export default AboutHome;
