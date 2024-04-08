import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";

import bg from "../../images/paper-bg.jpg";

import cows from "../../images/HomePage/cows.JPG";
import opera from "../../images/HomePage/opera-2.jpg";
import slopes from "../../images/HomePage/slopes.jpg";
import art from "../../images/HomePage/art.jpg";
import book from "../../images/HomePage/book.jpg";
import room from "../../images/HomePage/room.jpg";
import beach from "../../images/HomePage/beach.JPG";
import timmy from "../../images/HomePage/timmy.jpg";

function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [cows, opera, book, slopes, beach, art, room, timmy];
  const captions = [
    `Cows, from camp.`,
    `Sydney, from a ferry.`,
    `Interesting... book.`,
    `Perisher, '23.`,
    `Beach with HS friends!`,
    `Matisse Exhibit, '22.`,
    `My room <3.`,
    `Playing tourist :).`
  ];

  const handleClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    images.forEach(image => {
      const img = new Image();
      img.src = image;
    });
  }, []);

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
      <Grid container spacing={0}>
        <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ textAlign: 'left', marginLeft: '50px' }}> 
            <Typography component="div" sx={{  fontSize: '5rem', fontFamily: 'Creato Medium', color: 'black', lineHeight: '0.9em', marginBottom: '25px' }}>
                <span style={{ fontWeight: 'bold' }}>eric's <br /> website.</span>
            </Typography>
            <Typography variant="h5" component="div" sx={{ fontFamily: 'Creato', color: 'black', lineHeight: '1em' }}>
                Welcome to <br />my collection of
            </Typography>
            <Typography variant="h5" component="div" sx={{ fontFamily: 'Creato', color: 'black', lineHeight: '1em', marginLeft: '25px' }}>
                my designs,<br />
                my code,<br />
                my resume and<br />
            </Typography>
            <Typography variant="h5" component="div" sx={{ fontFamily: 'Creato', color: 'black', lineHeight: '1em', marginLeft: '0px' }}>
                my general interests.
            </Typography>
            <Typography variant="h6" component="div" sx={{
                fontFamily: 'Creato',
                color: 'black',
                lineHeight: '1em',
                position: 'absolute',
                bottom: '50px',
                left: '50px' 
            }}>
                (Psst, click on the picture <br/> for it to change)
            </Typography>
            <Typography variant="h6" component="div" sx={{
                fontFamily: 'Creato',
                fontStyle: 'italic',
                color: 'black',
                lineHeight: '1em',
                position: 'absolute',
                bottom: '50px',
                right: '50vw',
                marginRight: '50px',
                textAlign: 'right'
            }}>
                {captions[currentImageIndex]}
            </Typography>
          </Box>
        </Grid>

        {/* Pictures */}
        <Grid item xs={6} sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Box
            sx={{
              height: '100vh',
              width: '100%',
              backgroundImage: `url(${images[currentImageIndex]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              cursor: 'pointer'
            }}
            onClick={handleClick}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default HeroSection;
