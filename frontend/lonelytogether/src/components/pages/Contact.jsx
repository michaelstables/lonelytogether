// src/components/Contact.jsx
import React from 'react';
import { Typography } from '@mui/material';
import TextContainer from '../TextContainer'; // Import the TextContainer component

const Contact = () => {
    return (
        <TextContainer>
            <Typography variant='h5'><strong>Call:</strong> (770) 742-8748</Typography>
            <Typography variant='h5'><strong>Email:</strong> lonelytogethergames@gmail.com</Typography>
        </TextContainer>
    );
};

export default Contact;
