// src/components/Home.jsx
import React from 'react';
import { Typography } from '@mui/material';
import TextContainer from '../TextContainer.jsx'; // Import the TextContainer component

const Home = () => {
    return (
        <TextContainer>
            <Typography variant="h5">
                We are Lonely Together Game Studio, LLC, an independent game development studio based in the northern suburbs of Atlanta, Georgia. The studio was founded in 2023, and we are currently hard at work on our first game!
            </Typography>
        </TextContainer>
    );
};

export default Home;
