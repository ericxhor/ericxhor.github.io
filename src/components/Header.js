import * as React from "react";
import { Link } from 'react-router-dom';
import "../fonts/fonts.css";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Slide from "@mui/material/Slide";
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
    const [overlayVisible, setOverlayVisible] = React.useState(false);

    const handleMenuClick = () => {
        setOverlayVisible(!overlayVisible);
    };

    return (
        <>
        <AppBar 
            position="fixed"
            sx={{
                backgroundColor: overlayVisible ? 'black' : 'white',
                boxShadow: 'none',
                zIndex: 1000,
                height: '50px',
                borderBottom: '1px solid #000'
            }}
        >
            <Toolbar
                sx={{
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >
                <Link
                    to="/"
                    style={{ textDecoration: "none", color: overlayVisible ? 'white' : 'black'}}
                    onClick={ overlayVisible ? handleMenuClick : undefined }
                >
                    <Typography
                        variant="h5"
                        sx={{ textAlign: 'left', fontFamily: 'Creato Medium', marginTop: '-15px' }}
                    >
                        eric's website
                    </Typography>
                </Link>
                <MenuIcon
                    sx={{
                        color: overlayVisible ? 'white' : 'black',
                        fontSize: '2rem',
                        marginTop: '-15px',
                        marginLeft: 'auto',
                        transition: 'color 0.2s ease'
                    }}
                    onClick={handleMenuClick}
                />
            </Toolbar>
        </AppBar>
        <Slide in={overlayVisible}>
            <Box
                sx={{
                    position: 'fixed',
                    top: 0,
                    width: '100%',
                    height: '35%',
                    backgroundColor: 'black',
                    zIndex: 999
                }}
            >    
                <Typography variant="h4" component="div" sx={{
                    fontFamily: 'Creato',
                    color: 'white',
                    lineHeight: '1em',
                    marginTop: '64px',
                    marginLeft: '50px'
                }}>
                    <Link
                        to="/about-me"
                        style={{ textDecoration: "none", color: "white" }}
                        onClick={handleMenuClick}
                    >
                        About Me<br/>
                    </Link>
                    Coding Stack<br/>
                    <Link
                        to="/my-portfolio"
                        style={{ textDecoration: "none", color: "white" }}
                        onClick={handleMenuClick}
                    >
                        Design Portfolio<br/>
                    </Link>
                    <Link
                        to="https://github.com/ericxhor"
                        target="_blank"
                        rel="noopener noreferrer" 
                        style={{ textDecoration: "none", color: "white" }}
                    >
                        GitHub<br/>
                    </Link>
                    <Link
                        to="/contact-me"
                        style={{ textDecoration: "none", color: "white" }}
                        onClick={handleMenuClick}
                    >
                        Contact Me<br/>
                    </Link>
                </Typography>
            </Box>
        </Slide>
        <Fade in={overlayVisible}>
            <Box 
                sx={{
                    position: 'fixed',
                    top: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 998
                }}
            />
        </Fade>
        </>
    );
}
