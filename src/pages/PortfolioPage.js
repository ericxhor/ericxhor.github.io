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
              <Link to='https://www.canva.com/design/DAFn6XihGdg/suO953Zxem15YAk3cvtR5w/edit?utm_content=DAFn6XihGdg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' target="_blank" rel="noopener noreferrer">
                <img src={hecs} style={{ maxWidth: '100%' }} alt='hecs-help app'/>
              </Link>
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, textAlign: 'left', fontFamily: 'Creato', color: 'black' }}
              >
                01
              </Typography>

              <Link to='https://www.canva.com/design/DAGBvRlXHrk/zNVprzoydq0RiznZvgAfiQ/edit' target="_blank" rel="noopener noreferrer">
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
              <Link to='https://docs.google.com/presentation/d/1iGubfMzobEQIpo9tV5YcO9eEgRbitX7O/edit?usp=sharing&ouid=113802467073212593381&rtpof=true&sd=true' target="_blank" rel="noopener noreferrer">
                <img src={tuber}  alt="tuber" style={{ maxWidth: '90%' }} />
              </Link>
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, textAlign: 'left', fontFamily: 'Creato', color: 'black' }}
              >
                03
              </Typography>

              <Link to='https://www.canva.com/design/DAGByBDe__k/AERYRbcKdozTuuJrjt3BSg/edit' target="_blank" rel="noopener noreferrer">
                <img src={nab} alt="nab-case-comp" style={{ width: '90%', marginTop: '10px' }} />
              </Link>
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, textAlign: 'left', fontFamily: 'Creato', color: 'black' }}
              >
                04
              </Typography>

              <Link to='https://docs.google.com/presentation/d/1kAG9LzJ0pUu2erhV_stFNZujrDwAl_pJByP99A9EwAE/edit?usp=sharing' target="_blank" rel="noopener noreferrer">
                <img src={tsg} alt="tsg-case-comp" style={{ maxWidth: '90%', marginTop: '10px' }} />
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
            <Grid item xs={4} sx={{marginLeft: '-30px'}}>
              <Link to='https://www.canva.com/design/DAE5x4k04fg/YpxA9xHS-3ARxUWjoUwuPg/edit' target="_blank" rel="noopener noreferrer">
                <img src={cse} alt="csesoc-banners" style={{ maxWidth: '75%' }} />
              </Link>
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, textAlign: 'left', fontFamily: 'Creato', color: 'black' }}
              >
                06
              </Typography>

              <Link to='https://www.canva.com/design/DAGBvmtftB0/gluNE5caxXzZE4L_OmT-FQ/edit' target="_blank" rel="noopener noreferrer">
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
        <Grid item xs={4} sx={{marginLeft: '-50px'}}>
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
