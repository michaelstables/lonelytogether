const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3003;

// Use CORS
app.use(cors());

// Serve static files from the React app's build directory
app.use(express.static(path.join(__dirname, 'public')));

// Handles any requests that don't match the ones above, send back React's index.html file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
