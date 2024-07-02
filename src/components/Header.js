import * as React from "react";
import { Link } from 'react-router-dom';
import "../fonts/fonts.css";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
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
                backgroundColor: 'transparent',
                boxShadow: 'none',
                zIndex: 1000,
            }}
        >
            <Toolbar>
                <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black"}}
                >
                    <Typography
                        variant="h5"
                        sx={{ textAlign: 'left', fontFamily: 'Creato Medium' }}
                    >
                        eric's website
                    </Typography>
                </Link>
                <MenuIcon
                    sx={{
                        color: overlayVisible ? 'white' : 'black',
                        fontSize: '2rem',
                        marginLeft: 'auto',
                        transition: 'color 0.2s ease'
                    }}
                    onClick={handleMenuClick}
                />
            </Toolbar>
        </AppBar>
        <Fade in={overlayVisible}>
            <Box 
                sx={{
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    width: '50%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 999
                }}
            >
            <Typography variant="h2" component="div" sx={{
                fontFamily: 'Creato',
                color: 'white',
                lineHeight: '1em',
                padding: '50px'
            }}>
                <Link
                    to="/about-me"
                    style={{ textDecoration: "none", color: "white" }}
                >
                    <li>General Interests</li>
                </Link>
                <li>Coding Stack</li>
                <Link
                    to="/my-portfolio"
                    style={{ textDecoration: "none", color: "white" }}
                >
                    <li>Design Portfolio</li>
                </Link>
                <Link
                    to="https://github.com/ericxhor"
                    target="_blank"
                    rel="noopener noreferrer" 
                    style={{ textDecoration: "none", color: "white" }}
                >
                    <li>GitHub</li>
                </Link>
                <Link
                    to="/contact-me"
                    style={{ textDecoration: "none", color: "white" }}
                >
                    <li>Contact Me</li>
                </Link>
            </Typography>
            </Box>
        </Fade>
        </>
    );
}
