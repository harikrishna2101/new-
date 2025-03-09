const express = require('express');
const app = express();

// Sample route (optional)
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Port Configuration
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
