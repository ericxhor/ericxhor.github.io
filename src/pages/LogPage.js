import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";

import bg from "../images/paper-bg.jpg";
import monkeys from '../images/monkeys.jpg'
import crocs from '../images/crocs.JPG'
import monstera from '../images/monstera.jpg'
import cafe from '../images/cafe.jpg'

function LogPage() {
  return (
    <Box
      className="home-content"
      sx={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: "100vh",

      }}
    >
      <Grid container spacing={5} >
        <Grid item xs={4} style={{marginTop: '100px'}}>
          <Typography
            lineHeight={1.25}
            fontSize={50}
            component="div"
            sx={{ textAlign: 'left', fontFamily: 'Creato', color: 'black', marginLeft: '50px'}}
          >
            Reach out to me to talk about anything!
          </Typography>
        </Grid>

        <Grid item xs={8} style={{marginTop: '100px'}}>
          <Typography
            lineHeight={1.25}
            fontSize={30}
            component="div"
            sx={{ textAlign: 'left', fontFamily: 'Creato', color: 'black', marginLeft: '50px'}}
          >
            Email <br/>
            hor.eric660@gmail.com <br/> <br/>

            LinkedIn <br/>
            https://www.linkedin.com/in/eric-hor-ba8b771b4/ <br/>
          </Typography>
        </Grid>
      </Grid>

      <Grid container direction="row" alignItems="flex-end" spacing={5} style={{ marginTop: '50px'}}>
        <Grid item xs={6}>
          <img src={monkeys} style={{ maxWidth: '28%', height: 'auto', marginLeft: '50px' }} alt="one" />
          <img src={crocs} style={{ maxWidth: '25%', height: 'auto', marginLeft: '25px', marginBottom: '50px' }} alt="one" />
        </Grid>
        <Grid item xs={6}>
          <img src={monstera} style={{ maxWidth: '15%', height: 'auto', marginLeft: '250px' }} alt="one" />
          <img src={cafe} style={{ maxWidth: '20%', height: 'auto', marginLeft: '150px', marginBottom: '200px' }} alt="one" />
        </Grid>
      </Grid>

    </Box>
  );
}

export default LogPage;
