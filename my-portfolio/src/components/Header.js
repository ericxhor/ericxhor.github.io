import * as React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
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
                    backgroundColor: 'transparent',
                    color: 'transparent',
                    boxShadow: 'none',
                    borderBottom: '1px solid #ccc',
                    zIndex: 1000, // Ensure it's above other content
                    backdropFilter:"blur(20px)"
                }}
            >
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, textAlign: 'left', fontFamily: 'Creato', color: '#FFFFFF' }}
                    >
                        <span style={{ fontWeight: 'bold' }}>Hello</span> my name is Eric
                    </Typography>
                    <a href="https://shorturl.at/HTYZ8" style={{ textDecoration: 'none', color: '#FFFFFF' }}>
                        <ThemeProvider theme={theme}>
                            <Button color="inherit">about me.</Button>
                        </ThemeProvider>
                    </a>
                    <a href="https://shorturl.at/HTYZ8" style={{ textDecoration: 'none', color: '#FFFFFF' }}>
                        <ThemeProvider theme={theme}>
                            <Button color="inherit">portfolio.</Button>
                        </ThemeProvider>
                    </a>
                    <a href="https://shorturl.at/HTYZ8" style={{ textDecoration: 'none', color: '#FFFFFF' }}>
                        <ThemeProvider theme={theme}>
                            <Button color="inherit">resume.</Button>
                        </ThemeProvider>
                    </a>
                </Toolbar>
            </AppBar>
    );
}
