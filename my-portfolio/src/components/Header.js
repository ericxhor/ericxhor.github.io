import * as React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "../fonts/fonts.css"; // Import the CSS file

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

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
        <div style={{ padding: '0 16px' }}>
            <AppBar 
                position="static"
                sx={{
                    backgroundColor: 'transparent',
                    color: '#000000',
                    boxShadow: 'none',
                    borderBottom: '1px solid #ccc'
                }}
            >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, color: '#000000' }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{ flexGrow: 1, textAlign: 'center', fontFamily: 'Creato', color: '#000000' }}
                    >
                        <span style={{ fontWeight: 'bold' }}>Hello</span> my name is Eric
                    </Typography>
                    <a href="https://shorturl.at/HTYZ8" style={{ textDecoration: 'none', color: '#000000' }}>
                        <ThemeProvider theme={theme}>
                            <Button color="inherit">about me.</Button>
                        </ThemeProvider>
                    </a>
                </Toolbar>
            </AppBar>
        </div>
    );
}
