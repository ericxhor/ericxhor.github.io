// AboutMePage.js
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom';

import bg from "../images/paper-bg.jpg";
import seg1_1 from "../images/AboutMePage/seg1-1.jpg";
import seg1_2 from "../images/AboutMePage/seg1-2.JPG";
import cambodia from "../images/AboutMePage/cambodia.jpg";
import seg3_1 from "../images/AboutMePage/seg3-1.jpg";
import seg3_2 from "../images/AboutMePage/seg3-2.jpg";
import seg3_3 from "../images/AboutMePage/seg3-3.jpg";
import seg3_4 from "../images/AboutMePage/seg3-4.jpg";
import doggy from "../images/AboutMePage/doggy.JPG";

function AboutMePage() {
  const [currentSegment, setCurrentSegment] = useState(1);

  const handleSegmentChange = (segment) => {
    setCurrentSegment(segment);
  };

  const TOTAL_SEGMENTS = 4;

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
      <Grid container spacing={10}>
        {/* INTRODUCING ME SECTION */}
        {currentSegment === 1 && (
          <>
            <Grid item xs={4} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
              <img src={seg1_1} alt="me!" style={{ maxWidth: '95%', marginTop: '75px', marginLeft: '100px'  }}/>
            </Grid>
            <Grid item xs={2} style={{display: "flex", flexDirection: 'column', alignItems: "flex-start", marginTop: '150px'}}>
              <img src={seg1_2} alt="selfie-with-friends" style={{ maxWidth: '80%', marginRight: '25px', marginBottom: '25px'  }}/>
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, textAlign: 'left', fontFamily: 'Creato', color: 'black', fontSize: '20px'}}
              >
                I’m a Computer Science/Commerce student at UNSW. I used to study Actuarial Studies before deciding to switch things up; insurance policies, unfortunately, were not my calling.
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography
                variant="h2"
                component="div"
                sx={{ flexGrow: 1, textAlign: 'right', fontFamily: 'Creato', color: 'black', marginTop: '50px', marginRight: '50px', lineHeight: 1 }}
              >
                Hello, <br/> my name is 
                <span style={{ fontStyle: 'italic' }}> Eric</span>.
              </Typography>
            </Grid>
          </>
        )}

        {/* CAMBODIA SECTION */}
        {currentSegment === 2 && (
          <>
            <Grid item xs={12} style={{display: "flex", flexDirection: 'column', alignItems: "center", justifyItems: 'center'}}>
              <Typography
                variant="h2"
                component="div"
                sx={{ flexGrow: 1, textAlign: 'center', fontFamily: 'Creato', color: 'black', marginBottom: '25px', marginTop: '50px'}}
              >
                I'm Chinese-Cambodian.
              </Typography>
              <img src={cambodia} alt="cambodia" style={{ maxWidth: '40%' }}/>
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, textAlign: 'center', fontFamily: 'Creato', color: 'black', marginLeft: '450px', marginRight: '450px', marginTop: '25px'}}
              >
                Growing up, there was quite a large disconnect between me and Cambodian culture. I couldn’t speak the language, and I visited the country quite infrequently. Now, I’m itching to go back.
              </Typography>
            </Grid>
          </>
        )}


        {/* DUMP! OF THINGS I LIKE SECTION */}
        {currentSegment === 3 && (
          <>
            <Grid item xs={12}>
              <Typography
                variant="h3"
                component="div"
                sx={{ flexGrow: 1, textAlign: 'left', fontFamily: 'Creato', color: 'black', marginLeft: '50px', marginTop: '50px', lineHeight: 1 }}
              >
                Here is a (literal) dump <br/> of the things I like:
              </Typography>
            </Grid>

            {/* Snowboarding */}
            <Grid item xs={3} style={{ marginTop: '-25px', marginLeft: '50px' }}>
              <img src={seg3_1} alt="snowboarding" style={{ maxWidth: '75%' }}/>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  textAlign: 'left',
                  fontFamily: 'Creato',
                  color: 'black',
                  lineHeight: 1.2,
                }}
              >
                I've snowboarded once. <br/> It is now my identity.
              </Typography>
            </Grid>

            {/* Malatang */}
            <Grid item xs={3} style={{ marginTop: '-25px', marginLeft: '-125px' }}>
              <img src={seg3_2} alt="malatang" style={{ maxWidth: '90%' }}/>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  textAlign: 'left',
                  fontFamily: 'Creato',
                  color: 'black',
                  lineHeight: 1.2
                }}
              >
                I had to mention malatang <br/> (it is also my identity).
              </Typography>
            </Grid>

            {/* Malatang */}
            <Grid item xs={3} style={{ marginTop: '-25px', marginLeft: '-75px' }}>
              <Link to="https://open.spotify.com/playlist/2T3aOlXG4KoCkIGNJVVQtC?si=383f1d26d8fe4b54" target="_blank" rel="noopener noreferrer">
                <img src={seg3_3} alt="book" style={{ maxWidth: '80%' }}/>
              </Link>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  textAlign: 'left',
                  fontFamily: 'Creato',
                  color: 'black',
                  lineHeight: 1.2
                }}
              >
                My Reading Notion Page is <br/> linked
                (Fun fact: I didn't like <br/> A Little Life).
              </Typography>
            </Grid>

            {/* Spotify */}
            <Grid item xs={3} style={{ marginTop: '-25px', marginLeft: '-110px' }}>
              <Link to="https://open.spotify.com/playlist/2T3aOlXG4KoCkIGNJVVQtC?si=383f1d26d8fe4b54" target="_blank" rel="noopener noreferrer">
                <img src={seg3_4} alt="spotify" style={{ maxWidth: '90%' }} cursor='pointer'/>
              </Link>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  textAlign: 'left',
                  fontFamily: 'Creato',
                  color: 'black',
                  lineHeight: 1.2
                }}
              >
                I have also linked my current <br/> go-to Spotify playlist.
              </Typography>
            </Grid>
          </>
        )}

        {/* GOODBYE SECTION */}
        {currentSegment === 4 && (
          <>
            <Grid item xs={8}>
              <Typography
                variant="h2"
                component="div"
                sx={{ flexGrow: 1, textAlign: 'left', fontFamily: 'Creato', color: 'black', marginLeft: '50px', marginTop: '150px', lineHeight: 1 }}
              >
                I hope you enjoyed this (short) <br/> summary of me!
              </Typography>
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, textAlign: 'left', fontFamily: 'Creato', color: 'black', marginLeft: '75px', marginTop: '25px' }}
              >
                Hopefully we can get to know each other more in the future.
              </Typography>
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, textAlign: 'right', fontFamily: 'Creato', color: 'black', marginRight: '280px',  marginTop: '25px' }}
              >
                <Link to="/contact-me" style={{ textDecoration: 'underline', color: 'black' }}>Contact me.</Link>
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <img src={doggy} alt="polaroid" style={{ maxWidth: '75%', marginTop: '250px' }}/>
            </Grid>
          </>
        )}

        <Grid item xs={12}>
          <Typography variant="h5" component="div" sx={{ textAlign: 'center', fontFamily: 'Creato', color: 'black', position: 'absolute', bottom: '0', width: '100%' }}>
            {currentSegment > 1 && (
              <span style={{ cursor: 'pointer', position: 'absolute', left: '25px', bottom: '25px' }} onClick={() => handleSegmentChange(currentSegment - 1)}>
                ← Going back
              </span>
            )}
            {currentSegment < TOTAL_SEGMENTS && (
              <span style={{ cursor: 'pointer', position: 'absolute', right: '25px', bottom: '25px' }} onClick={() => handleSegmentChange(currentSegment + 1)}>
                Let's move on →
              </span>
            )}
          </Typography>
        </Grid>
      </ Grid>
    </ Box>
  );
}

export default AboutMePage;
