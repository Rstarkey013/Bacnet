const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/devices', (req, res) => {
  const devices = [
    { id: 1, name: 'Device 1', type: 'temperature', data: [{ timestamp: '2023-01-01', value: 22 }] },
    { id: 2, name: 'Device 2', type: 'power', data: [{ timestamp: '2023-01-01', value: 65 }] },
    { id: 3, name: 'Device 3', type: 'alarm', data: [{ value: 'active' }, { value: 'inactive' }] }
  ];
  res.json(devices);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
