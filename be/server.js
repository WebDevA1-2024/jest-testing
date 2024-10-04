const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all requests
app.use(cors());

// Dummy API endpoint
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
