import * as React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom'; // Import Link from React Router
import "../fonts/fonts.css"; // Import the CSS file

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
/* The below is wrong, it calls the wrong properties.
const theme = createTheme({
    components: {
        MuiButton: {
            style: {
                textTransform: 'none',
            },
        },
    },
});
*/

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'lowercase',
                },
            },
        },
    },
});


export default function Header() {
    return (
        <AppBar 
            position="fixed"
            sx={{
                backgroundColor: '#EBE9DD',
                boxShadow: 'none',
                // borderBottom: '1px solid #ccc',
                zIndex: 1000, // Ensure it's above other content
                // backdropFilter:"blur(20px)"
            }}
        >
            <Toolbar>
                <Typography
                    variant="h6"
                    component={Link}
                    to="/"
                    sx={{ flexGrow: 1, textAlign: 'left', fontFamily: 'Creato', color: '#375879', textDecoration: 'none' }}
                >
                    <span style={{ fontWeight: 'bold' }}>Hello</span> my name is Eric
                </Typography>
                <Link
                    to="/about-me"
                    style={{ textDecoration: "none", color: "#375879" }}
                >
                    <ThemeProvider theme={theme}>
                        <Button color="inherit">about me.</Button>
                    </ThemeProvider>
                </Link>
                <Link
                    to="/my-portfolio"
                    style={{ textDecoration: "none", color: "#375879" }}
                >
                    <ThemeProvider theme={theme}>
                        <Button color="inherit">portfolio.</Button>
                    </ThemeProvider>
                </Link>
                <a href="https://shorturl.at/HTYZ8" style={{ textDecoration: 'none', color: '#375879' }}>
                    <ThemeProvider theme={theme}>
                        <Button color="inherit">resume.</Button>
                    </ThemeProvider>
                </a>
            </Toolbar>
        </AppBar>
    );
}
