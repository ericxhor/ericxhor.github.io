import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
// import { createTheme } from '@mui/material/styles';
import bg from "./banner-temp.png";
import "../fonts/fonts.css"; // Import the CSS file

// const theme = createTheme({
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           textTransform: 'none',
//           fontSize: '1.2rem', // Increase the font size
//           padding: '2px 24px', // Increase the padding to make the button larger
//         },
//         outlined: {
//           borderRadius: '50px',
//         },
//       },
//     },
//   },
//   palette: {
//     button: {
//       main: '#FFFFFF',
//     },
//   },
// });

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
        // direction="column"
        // justifyContent="center"
        // alignItems="center"
        // spacing={8}
      >
        <Grid item xs={1}>
        </Grid>

        {/* <Grid item xs={4.5}>
          <Typography
            variant="h3"
            component="div"
            sx={{ flexGrow: 1, textAlign: 'center', fontFamily: 'Creato', color: '#EBE9DD', letterSpacing: '0.05em' }}
          >
            <span style={{ fontWeight: 'bold' }}>WELCOME</span>
          </Typography>
        </Grid> */}
        {/* <Grid item xs={8}>
          <Typography
            variant="h2"
            component="div"
            sx={{ flexGrow: 1, textAlign: 'center', fontFamily: 'Creato', color: '#EBE9DD' }}
          >
            <span style={{ fontWeight: 'bold', letterSpacing: '0.025em'  }}>Welcome</span>
            —  My website is a collection of my designs, my code, my resume and my general interests.
          </Typography>
        </Grid> */}
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
            sx={{ flexGrow: 1, textAlign: 'right', fontFamily: 'Creato', color: '#EBE9DD', marginRight: '140px' }}
          >
            <div>
              my designs,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;my code,
            </div>
          </Typography>

          <Typography
            variant="h2"
            component="div"
            sx={{ flexGrow: 1, textAlign: 'left', fontFamily: 'Creato', color: '#EBE9DD', marginLeft: '140px' }}
          >
            my resume and
          </Typography>

          <Typography
            variant="h2"
            component="div"
            sx={{ flexGrow: 1, textAlign: 'left', fontFamily: 'Creato', color: '#EBE9DD', marginLeft: '280px' }}
          >
            <div>
              my general interests.
            </div>
          </Typography>
        </Grid>


        {/* <Grid item xs={3.5}>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, textAlign: 'center', fontFamily: 'Creato', color: '#EBE9DD' }}
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
              sx={{ marginTop: '20px', color: '#EBE9DD', outlineColor: '#EBE9DD' }}
            >
              Contact me.
            </Button>
          </ThemeProvider>
        </Grid> */}

        <Grid item xs={1}></Grid>
      </ Grid>
    </ Box>
  );
}

export default HeroSection;
