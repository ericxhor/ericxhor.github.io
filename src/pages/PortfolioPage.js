// PortfolioPage.js
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom';

import bg from "../images/paper-bg.jpg";
import tuber from "../images/PortfolioPage/tuber.JPG";
import nab from "../images/PortfolioPage/nab.JPG";
import tsg from "../images/PortfolioPage/tsg.JPG";
import hecs from "../images/PortfolioPage/hecs.png";
import macq from "../images/PortfolioPage/macq.png";
import cse from "../images/PortfolioPage/cse.jpg";
import wallpaper from "../images/PortfolioPage/wallpaper.jpg";

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
        alignItems: "center"
      }}
    >
      <Grid container spacing={0} sx={{marginTop: '50px'}}>
        {/* The Left Hand Side: Pictures */}
        <Grid item xs={8}>
          <Grid container spacing={3} sx={{paddingLeft: '50px', paddingtop: '50px'}}>
            {/* Column One */}
            <Grid item xs={4}>
              <Link to='https://shorturl.at/buvG2' target="_blank" rel="noopener noreferrer">
                <img src={hecs} style={{ maxWidth: '100%' }} alt='hecs-help app'/>
              </Link>
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, textAlign: 'left', fontFamily: 'Creato', color: 'black' }}
              >
                01
              </Typography>

              <Link to='https://shorturl.at/eosvE' target="_blank" rel="noopener noreferrer"></Link>
                <img src={macq} style={{ width: '100%', marginTop: '10px' }}  alt='invoice creation app'/>
              </Link>
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, textAlign: 'left', fontFamily: 'Creato', color: 'black' }}
              >
                02
              </Typography>
            </Grid>

            {/* Column Two */}
            <Grid item xs={4}>
              <Link to='https://shorturl.at/kxJ67' target="_blank" rel="noopener noreferrer">
                <img src={tuber}  alt="tuber" style={{ maxWidth: '100%' }} />
              </Link>
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, textAlign: 'left', fontFamily: 'Creato', color: 'black' }}
              >
                03
              </Typography>

              <img src={nab} alt="nab-case-comp" style={{ width: '100%', marginTop: '10px' }} />
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, textAlign: 'left', fontFamily: 'Creato', color: 'black' }}
              >
                04
              </Typography>

              <Link to='https://shorturl.at/axWY6' target="_blank" rel="noopener noreferrer">
                <img src={tsg} alt="tsg-case-comp" style={{ maxWidth: '100%', marginTop: '10px' }} />
              </Link>
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, textAlign: 'left', fontFamily: 'Creato', color: 'black' }}
              >
                05
              </Typography>
            </Grid>

            {/* Column Three */}
            <Grid item xs={4}>
              <Link to='https://shorturl.at/eKNY9' target="_blank" rel="noopener noreferrer">
                <img src={cse} alt="csesoc-banners" style={{ maxWidth: '75%' }} />
              </Link>
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, textAlign: 'left', fontFamily: 'Creato', color: 'black' }}
              >
                06
              </Typography>

              <Link to='https://shorturl.at/wCDFM' target="_blank" rel="noopener noreferrer">
                <img src={wallpaper} alt="moodboard!" style={{ width: '75%', marginTop: '10px' }} />
              </Link>
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, textAlign: 'left', fontFamily: 'Creato', color: 'black' }}
              >
                07
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* The Right Hand Side: Titles */}
        <Grid item xs={4}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, textAlign: 'left', fontFamily: 'Creato Medium', fontWeight: 'bold', color: 'black'}}
              >
                University Work
              </Typography>
            </Grid>

            <Grid item xs={1.5}>
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, textAlign: 'left', fontFamily: 'Creato', color: 'black' }}
              >
                01
              </Typography>
            </Grid>
            <Grid item xs={10.5}>
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, textAlign: 'left', fontFamily: 'Creato', color: 'black' }}
              >
                HECS-HELP Loan Calculator
              </Typography>
            </Grid>
            
            <Grid item xs={1.5}>
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, textAlign: 'left', fontFamily: 'Creato', color: 'black' }}
              >
                02
              </Typography>
            </Grid>
            <Grid item xs={10.5}>
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, textAlign: 'left', fontFamily: 'Creato', color: 'black' }}
              >
                Macquarie Bank: <br/>
                Invoice Creation
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, textAlign: 'left', fontFamily: 'Creato Medium', fontWeight: 'bold', color: 'black', marginTop: '25px'  }}
              >
                Case Competitions
              </Typography>
            </Grid>
            
            <Grid item xs={1.5}>
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, textAlign: 'left', fontFamily: 'Creato', color: 'black' }}
              >
                03
              </Typography>
            </Grid>
            <Grid item xs={10.5}>
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, textAlign: 'left', fontFamily: 'Creato', color: 'black' }}
              >
                Tuber: <br/>
                The On-Demand Translation Service
              </Typography>
            </Grid>
            
            <Grid item xs={1.5}>
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, textAlign: 'left', fontFamily: 'Creato', color: 'black' }}
              >
                04
              </Typography>
            </Grid>
            <Grid item xs={10.5}>
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, textAlign: 'left', fontFamily: 'Creato', color: 'black' }}
              >
                NAB x WIT: <br/>
                Parametric Insurance
              </Typography>
            </Grid>
            
            <Grid item xs={1.5}>
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, textAlign: 'left', fontFamily: 'Creato', color: 'black' }}
              >
                05
              </Typography>
            </Grid>
            <Grid item xs={10.5}>
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, textAlign: 'left', fontFamily: 'Creato', color: 'black' }}
              >
                Tech for Social Good: <br/>
                Agricultural Partnership w/ Universities
              </Typography>
            </Grid>
            
            <Grid item xs={12}>
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, textAlign: 'left', fontFamily: 'Creato Medium', fontWeight: 'bold', color: 'black', marginTop: '25px' }}
              >
                Personal/Extra-curricular
              </Typography>
            </Grid>
            <Grid item xs={1.5}>
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, textAlign: 'left', fontFamily: 'Creato', color: 'black' }}
              >
                06
              </Typography>
            </Grid>
            <Grid item xs={10.5}>
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, textAlign: 'left', fontFamily: 'Creato', color: 'black' }}
              >
                CSESoc Banners
              </Typography>
            </Grid>

            <Grid item xs={1.5}>
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, textAlign: 'left', fontFamily: 'Creato', color: 'black' }}
              >
                07
              </Typography>
            </Grid>
            <Grid item xs={10.5}>
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, textAlign: 'left', fontFamily: 'Creato', color: 'black' }}
              >
                2024 Vision Board
              </Typography>
            </Grid>

          </ Grid>
        </Grid>
      </ Grid>
    </ Box>
  );
}

export default PortfolioPage;
