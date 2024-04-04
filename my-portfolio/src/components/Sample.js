import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom'; // Import Link from React Router

import one from './1.png'
import two from './2.png'

// import { Spotify } from "react-spotify-embed";

function Sample() {
  return (
    <Box sx={{ backgroundColor: '#EBE9DD', height: "100vh" }}>
      <Grid container spacing={10}>
        <Grid item xs={6}>
          <Typography
            variant="h2"
            component="div"
            sx={{ flexGrow: 1, textAlign: 'left', fontFamily: 'Creato', color: '#375879', marginLeft: '75px', marginTop:'75px' }}
          >
            <span style={{ fontWeight: 'bold' }}>Fun Facts*</span>
          </Typography>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, textAlign: 'justify', fontFamily: 'Creato', color: '#375879', marginTop: '15px', marginLeft: '150px' }}
          >
            I’m always asked for fun facts about myself in new settings, so I thought I’d jump the gun and list them now.
          </Typography>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, textAlign: 'right', fontFamily: 'Creato', color: '#375879', marginTop: '15px' }}
          >
            <Link to="/about-me" style={{ textDecoration: 'underline', color: '#375879' }}>Learn more about me.</Link>
          </Typography>
          <img src={one} style={{ maxWidth: '10%', height: 'auto', marginLeft: '75px', marginTop: '75px' }} alt="one" />  
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, textAlign: 'left', fontFamily: 'Creato', color: '#375879', marginTop: '15px', marginLeft: '150px' }}
          >
            I don’t write on the line, I write through the line.
          </Typography>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, textAlign: 'left', fontFamily: 'Creato', color: '#375879', marginTop: '50px', marginLeft: '75px'}}
          >
            *Fun is a loose term.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <img src={two} style={{ maxWidth: '12%', height: 'auto', marginTop: '427px' }} alt="two" />  
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, textAlign: 'left', fontFamily: 'Creato', color: '#375879', marginTop: '15px', marginLeft: '75px', marginRight: '50px' }}
          >
            My hot take is that bottled water should be free.
          </Typography>
        </Grid>

        {/* <Grid item xs={6}>
          <iframe
            title="Spotify Playlist"
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/2T3aOlXG4KoCkIGNJVVQtC?utm_source=generator"
            width="85%" // The OG was 100%
            height="500" // The OG was 352.
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy">
          </iframe>
        </Grid> */}
      </Grid>
    </Box>
  );
}

export default Sample;
