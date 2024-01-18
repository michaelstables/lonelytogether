// src/components/GlobalContainer.jsx
import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const GlobalContainer = ({ children }) => {
    const theme = useTheme();
    const darkPurpleColor = theme.palette.primary.dark;

    return (
        <Box
            sx={{
                width: '80%', // Set width to 80% of the viewport width
                maxWidth: '80%', // Ensure it doesn't exceed 80% of the viewport width
                minHeight: '100vh', // Minimum height to fill the screen vertically
                margin: 'auto', // Center the container horizontally
                padding: 0, // Remove all padding
                backgroundColor: darkPurpleColor, // Use the dark purple color from the theme
                color: '#fff', // White text color
                boxShadow: '0px 30px 40px rgba(0, 0, 0, 0.6)', // Strong shadow for depth
                borderRadius: '10px', // Rounded corners for a lifted look
                border: '1px solid #ccc', // Thin border for separation
                boxSizing: 'border-box', // Include border in sizing
                background: `linear-gradient(to bottom, ${darkPurpleColor} 55%, ${darkPurpleColor} 100%)`, // Gradient effect
            }}
        >
            {children}
        </Box>
    );
};

export default GlobalContainer;
