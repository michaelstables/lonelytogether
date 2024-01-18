// src/components/TextContainer.jsx
import React from 'react';
import { Container } from '@mui/material';

const TextContainer = ({ children }) => {
    return (
        <Container sx={{ width: '60%', margin: '0 auto', textAlign: 'center', wordWrap: 'break-word', paddingTop: '5%' }}>
            {children}
        </Container>
    );
};

export default TextContainer;
