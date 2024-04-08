import * as React from "react";
import { Link } from 'react-router-dom';
import "../fonts/fonts.css";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Header() {
    const [activeTab, setActiveTab] = React.useState('eric\'s website');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <AppBar 
            position="fixed"
            sx={{
                backgroundColor: 'transparent',
                boxShadow: 'none',
                zIndex: 1000,
            }}
        >
            <Toolbar>
                <Typography
                    variant="h5"
                    component={Link}
                    to="/"
                    sx={{ flexGrow: 1, textAlign: 'left', fontFamily: 'Creato Medium', color: 'black', textDecoration: 'none', borderBottom: activeTab === 'eric\'s website' ? 'none' : 'none'  }}
                    onClick={() => handleTabClick('eric\'s website')}
                >
                    <span style={{ fontWeight: 'bold' }}>eric's website</span>
                </Typography>
                <Link
                    to="/about-me"
                    style={{ textDecoration: "none", color: "black" }}
                >
                    <Typography 
                        style={{ fontFamily: 'Creato', fontSize: '1.1rem', borderBottom: activeTab === 'about-me' ? '1px solid black' : 'none' }} 
                        onClick={() => handleTabClick('about-me')}
                    >
                        about me.
                    </Typography>
                </Link>
                <Link
                    to="/my-portfolio"
                    style={{ textDecoration: "none", color: "black" }}
                >
                    <Typography 
                        style={{ fontFamily: 'Creato', fontSize: '1.1rem', borderBottom: activeTab === 'my-portfolio' ? '1px solid black' : 'none', marginLeft: '25px'  }} 
                        onClick={() => handleTabClick('my-portfolio')}
                    >
                        design portfolio.
                    </Typography>
                </Link>
                <Link
                    to="/logs"
                    style={{ textDecoration: "none", color: "black" }}
                >
                    <Typography 
                        style={{ fontFamily: 'Creato', fontSize: '1.1rem', borderBottom: activeTab === 'contact-me' ? '1px solid black' : 'none', marginLeft: '25px'  }} 
                        onClick={() => handleTabClick('contact-me')}
                    >
                        contact me.
                    </Typography>
                </Link>
            </Toolbar>
        </AppBar>
    );
}
