const express = require('express');
const app = express();

// Home route
app.get('/', (req, res) => {
  res.send('Hello, Amohelang! Your server is running 🚀');
});

// Listen on port 3000
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
