import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#242157',
            light: '#45457F',
            dark: '#6A6CB2',
        },
        secondary: {
            main: '#806DB1',
            light: '#C176B1',
        },
        text: {
            primary: '#474748',
        },
    },
    typography: {
        fontFamily: '"Tw Cen MT Condensed Extra Bold", Arial Narrow, sans-serif',
        h1: {
            fontFamily: '"Tw Cen MT Condensed Extra Bold", Arial, sans-serif',
        },
        // Add other variants as needed
    },
    // Add other theme customizations as needed
});

export default theme;
