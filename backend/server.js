const express = require('express');
const path = require('path'); // Add this line for better path handling
const app = express();
const port = 3000;

// Serve static files from the 'frontend' directory
app.use(express.static(path.join(__dirname, '../frontend')));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

