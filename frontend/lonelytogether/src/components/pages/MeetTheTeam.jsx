// src/components/MeetTheTeam.jsx
import React from 'react';
import { Typography } from '@mui/material';
import TextContainer from '../TextContainer'; // Adjust the import path
import { Box } from '@mui/system';

const MeetTheTeam = () => {
    return (
        <TextContainer>
            <Typography variant="h4">Meet The Team</Typography>
            <Box>
                <Typography variant="h5">Emery</Typography>
                <Typography>Founder, Programmer</Typography>
                <Typography>Hard at work on the game engine.</Typography>
            </Box>
            <Box>
                <Typography variant="h5">Ashe</Typography>
                <Typography>Lead Designer, Creative Lead</Typography>
                <Typography>She is a creative person that can draw pictures.</Typography>
            </Box>
            <Box>
                <Typography variant="h5">David</Typography>
                <Typography>Business Development</Typography>
                <Typography>Hey Ashe, I bet you're reading this in the anime voice. Believe it!</Typography>
            </Box>
            <Box>
                <Typography variant="h5">Nicole</Typography>
                <Typography>Writer, Editor</Typography>
                <Typography>This description would've been better if she wrote it.</Typography>
            </Box>
            <Box>
                <Typography variant="h5">Craig</Typography>
                <Typography>Game Designer</Typography>
                <Typography>Great Deal!</Typography>
            </Box>
            <Box>
                <Typography variant="h5">Scott</Typography>
                <Typography>World/Level Designer</Typography>
                <Typography>Made great levels in RPG maker so we brought him on board.</Typography>
            </Box>
            <Box>
                <Typography variant="h5">Chris</Typography>
                <Typography>Secretary</Typography>
                <Typography>He just showed up one day, so we gave him a job.</Typography>
            </Box>
        </TextContainer>
    );
};

export default MeetTheTeam;
