// AboutMePage.js
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom'; // Import Link from React Router

import seg1_1 from "../images/seg1-1.jpg";
import seg1_2 from "../images/seg1-2.JPG";
import cambodia from "../images/cambodia.jpg";
import seg3_1 from "../images/seg3-1.jpg";
import seg3_2 from "../images/seg3-2.JPG";
import seg3_3 from "../images/seg3-3.jpg";
import seg3_4 from "../images/seg3-4.jpg";
import doggy from "../images/doggy.JPG";

function AboutMePage() {
  return (
    <Box sx={{ backgroundColor: '#EBE9DD', paddingTop: '64px', minHeight: '100vh' }}>
      <Grid container spacing={10}>
        <Grid item xs={6} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <img src={seg1_1} alt="polaroid" style={{ maxWidth: '65%', marginTop: '75px', marginLeft: '50px'  }}/>
          <img src={seg1_2} alt="polaroid" style={{ maxWidth: '25%', marginLeft: '25px'  }}/>
        </Grid>

        <Grid item xs={6}>
          <Typography
            variant="h2"
            component="div"
            sx={{ flexGrow: 1, textAlign: 'right', fontFamily: 'Creato', color: '#375879', marginRight: '50px', marginTop: '25px' }}
          >
            Hello, <br/> my name is 
            <span style={{ fontStyle: 'italic' }}> Eric</span>.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, textAlign: 'left', fontFamily: 'Creato', color: '#375879', marginLeft: '540px', marginTop: '-170px', marginRight: '150px' }}
          >
            I’m a Computer Science/Commerce student at UNSW. I used to study Actuarial Studies before deciding to switch things up; insurance policies, unfortunately, was not my calling.
          </Typography>
        </Grid>

        {/* CAMBODIA SECTION */}
        {/* <Grid item xs={12}>
          <Typography
            variant="h2"
            component="div"
            sx={{ flexGrow: 1, textAlign: 'center', fontFamily: 'Creato', color: '#375879', marginTop: '-50px' }}
          >
            I'm Chinese-Cambodian.
          </Typography>
        </Grid>
        <Grid item xs={12} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <img src={cambodia} alt="polaroid" style={{ maxWidth: '55%', marginTop: '-110px'  }}/>
        </Grid> */}
        <Grid item xs={12} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <img src={cambodia} alt="polaroid" style={{ maxWidth: '55%', marginTop: '-30px'  }}/>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h2"
            component="div"
            sx={{ flexGrow: 1, textAlign: 'center', fontFamily: 'Creato', color: '#375879', marginTop: '-610px' }}
          >
            I'm Chinese-Cambodian.
          </Typography>
        </Grid>

        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, textAlign: 'center', fontFamily: 'Creato', color: '#375879', marginTop: '-100px' }}
          >
            Growing up, there was quite a large disconnect between me and Cambodian culture. I couldn’t speak the language, and I visited the country quite infrequently. Now, I’m itching to go back.
          </Typography>
        </Grid>
        <Grid item xs={3}></Grid>

        {/* DUMP! */}
        <Grid item xs={12}>
          <Typography
            variant="h2"
            component="div"
            sx={{ flexGrow: 1, textAlign: 'left', fontFamily: 'Creato', color: '#375879', marginLeft: '50px' }}
          >
            Here is a (literal) dump <br/> of the things I like:
          </Typography>
        </Grid>

        <Grid item xs={3} style={{ marginTop: '-25px' }}>
          <img src={seg3_1} alt="polaroid" style={{ maxWidth: '100%', marginLeft: '50px' }}/>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: 'left',
              fontFamily: 'Creato',
              color: '#375879',
              marginLeft: '50px',
              lineHeight: 1.2,
              marginRight: '22px'
            }}
          >
            I've snowboarded once. <br/> It is now my identity.
          </Typography>
        </Grid>
        <Grid item xs={3} style={{ marginTop: '-25px' }}>
          <img src={seg3_2} alt="polaroid" style={{ maxWidth: '100%' }}/>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: 'left',
              fontFamily: 'Creato',
              color: '#375879',
              lineHeight: 1.2
            }}
          >
            Me and my HS friends!
          </Typography>
        </Grid>
        
        <Grid item xs={3} style={{ marginTop: '-25px' }}>
          <img src={seg3_3} alt="polaroid" style={{ maxWidth: '100%', marginLeft: '-50px'  }}/>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: 'left',
              fontFamily: 'Creato',
              color: '#375879',
              lineHeight: 1.2,
              marginLeft: '-50px'
            }}
          >
            My Reading Notion Page is linked. <br/>
            (I did not like A Little Life)
          </Typography>
        </Grid>

        <Grid item xs={3} style={{ marginTop: '-25px' }}>
          <img src={seg3_4} alt="polaroid" style={{ maxWidth: '100%', marginLeft: '-100px' }}/>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: 'left',
              fontFamily: 'Creato',
              color: '#375879',
              lineHeight: 1.2,
              marginLeft: '-100px'
            }}
          >
            I have also linked my current <br/> go-to Spotify playlist.
          </Typography>
        </Grid>
        {/* <Grid item xs={12} style={{ marginTop: '-25px' }}>
          <img src={seg3_1} alt="polaroid" style={{ maxWidth: '20%', marginLeft: '50px' }}/>
          <img src={seg3_2} alt="polaroid" style={{ maxWidth: '20%', marginLeft: '50px' }}/>
          <img src={seg3_3} alt="polaroid" style={{ maxWidth: '20%', marginLeft: '50px' }}/>
          <img src={seg3_4} alt="polaroid" style={{ maxWidth: '23%', marginLeft: '50px', marginRight: '50px'  }}/>
        </Grid> */}

        <Grid item xs={8}>
          <Typography
            variant="h2"
            component="div"
            sx={{ flexGrow: 1, textAlign: 'left', fontFamily: 'Creato', color: '#375879', marginLeft: '50px', marginTop: '50px'  }}
          >
            I hope you enjoyed this (short) <br/> summary of me!
          </Typography>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, textAlign: 'left', fontFamily: 'Creato', color: '#375879', marginLeft: '75px', marginTop: '25px' }}
          >
            Hopefully we can get to know each other more in the future.
          </Typography>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, textAlign: 'right', fontFamily: 'Creato', color: '#375879', marginRight: '280px',  marginTop: '25px' }}
          >
            <Link to="/about-me" style={{ textDecoration: 'underline', color: '#375879' }}>Contact me.</Link>
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <img src={doggy} alt="polaroid" style={{ maxWidth: '75%', marginTop: '250px', marginBottom: '100px' }}/>
        </Grid>
      </ Grid>
    </ Box>
  );
}

export default AboutMePage;
