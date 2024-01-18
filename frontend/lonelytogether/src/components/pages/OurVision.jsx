// src/components/OurVision.jsx
import React from 'react';
import { Typography, Container, Box } from '@mui/material';

const OurVision = () => {
    const marginStyle = { margin: '20px 0' };

    return (
        <Container sx={{ width: '60%', margin: '0 auto', wordWrap: 'break-word', paddingTop: '5%' }}>
            <Typography variant="h3" style={{ textAlign: 'center' }}>
                Our Vision
            </Typography>

            <Box sx={marginStyle}>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    2D, not 3D.
                </Typography>
                <Typography>
                    In a world filled with three-dimensional games, two-dimensional games will always have a place and will never go away. This is for a few reasons:
                </Typography>
            </Box>
            <Box sx={marginStyle}>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    Easier for new players.
                </Typography>
                <Typography>
                    Video games are for everyone. They should be accessible to all. This means the game should be easy to pick up, learn, and play.
                    For example, we've seen new players pick up a racing game. Seems simple enough, left on the d-pad turns the car left, right turns right.
                    But then they turn the car so it faces the camera. Now, does left on the d-pad make the car go left from the point of view of the camera/screen
                    or the car/driver's POV. In a two-dimensional side-scroller, pressing left makes the character move left and pressing right always makes them move right.
                    Similarly, for a top-down style game, the directions on the d-pad map trivially to the directions you would move. There is no more fighting with the camera.
                </Typography>
            </Box>
            <Box sx={marginStyle}>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    More performance.
                </Typography>
                <Typography>
                    A modern-day 3D model might have hundreds or thousands of triangles for even a single simple model. These triangles must all be rendered, lit, culled, etc.
                    A sprite, on the other hand, is just two triangles that form a rectangle with a texture on top. Modern computers are extremely fast and are able to do amazing things,
                    so some may say, who cares about this extra performance if the computer can handle it. The reason is that we can then run on slower machines that other games cannot run on.
                    We could target the Raspberry Pi as a supported platform with a single-threaded game and still run fine. This allows the game to be more accessible to more people for less.
                    Additionally, resources are finite. The development effort and computer resources that would go into making a realistic-looking game could be spent on other areas.
                    Instead of having a finely modeled hand that moves realistically because of motion capture and utilizes raycasting to be perfectly lit, we could spend that development effort
                    on more story content and the computer resources on a crazy particle system or a more involved NPC AI.
                </Typography>
            </Box>
            {/* Rest of the text goes here */}
        </Container>
    );
};

export default OurVision;
