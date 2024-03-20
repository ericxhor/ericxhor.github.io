import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import homeLogo from "./banner.jpg";
import "../fonts/fonts.css"; // Import the CSS file

import Button from "@mui/material/Button";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontSize: '1.2rem', // Increase the font size
          padding: '2px 24px', // Increase the padding to make the button larger
        },
        outlined: {
          borderRadius: '50px',
        },
      },
    },
  },
  palette: {
    button: {
      main: '#FFFFFF',
    },
  },
});

function HeroSection() {
  return (
    <Box
      className="home-content"
      sx={{
        backgroundImage: `url(${homeLogo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Grid container spacing={1} alignItems="center"
        // direction="column"
        // justifyContent="center"
        // alignItems="center"
        // spacing={8}
      >
        <Grid item xs={2}>
        </Grid>

        <Grid item xs={4.5}>
          <Typography
            variant="h3"
            component="div"
            sx={{ flexGrow: 1, textAlign: 'center', fontFamily: 'Creato', color: '#FFFFFF', letterSpacing: '0.05em' }}
          >
            <span style={{ fontWeight: 'bold' }}>WELCOME</span>
          </Typography>
        </Grid>

        <Grid item xs={3.5}>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, textAlign: 'center', fontFamily: 'Creato', color: '#FFFFFF' }}
          >
            <div style={{ textAlign: 'left' }}>to my website.</div>
            <div style={{ textAlign: 'left' }}>to my portfolio.</div>
            <div style={{ textAlign: 'left' }}>to my projects.</div>
          </Typography>
          <ThemeProvider theme={theme}>
            <Button
              color="button"
              variant="outlined"
              size="large"
              href="https://shorturl.at/HTYZ8"
              sx={{ marginTop: '20px' }}
            >
              Contact me.
            </Button>
          </ThemeProvider>
        </Grid>

        <Grid item xs={2}></Grid>
      </ Grid>
    </ Box>
  );
}

export default HeroSection;
