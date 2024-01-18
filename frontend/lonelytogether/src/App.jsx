import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';
import Navigation from './components/Navigation';
import GlobalContainer from './components/GlobalContainer';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import MeetTheTeam from './components/pages/MeetTheTeam';
import OurVision from './components/pages/OurVision';
import Banner from './components/Banner'; // Import the Banner component

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <GlobalContainer>
                    <Banner /> {/* Place the Banner component inside GlobalContainer */}
                    <Navigation />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/meet-the-team" element={<MeetTheTeam />} />
                        <Route path="/our-vision" element={<OurVision />} />
                    </Routes>
                </GlobalContainer>
            </Router>
        </ThemeProvider>
    );
}

export default App;
