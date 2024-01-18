import React from 'react';
import { Link } from 'react-router-dom';
import { Button, AppBar, Toolbar } from '@mui/material';

const Navigation = () => {
    return (
        <AppBar position="static">
            <Toolbar sx={{ justifyContent: 'flex-start', marginTop: 0 }}>
                <Button color="inherit" component={Link} to="/" sx={{ marginRight: 2 }}>Home</Button>
                <Button color="inherit" component={Link} to="/our-vision" sx={{ marginRight: 2 }}>Our Vision</Button>
                <Button color="inherit" component={Link} to="/meet-the-team" sx={{ marginRight: 2 }}>Meet The Team</Button>
                <Button color="inherit" component={Link} to="/contact">Contact</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navigation;
