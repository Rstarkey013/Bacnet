const fs = require('fs');
const https = require('https');
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/devices', (req, res) => {
  const devices = [
    { id: 1, name: 'Device 1', type: 'temperature', data: [{ timestamp: '2023-01-01', value: 22 }] },
    { id: 2, name: 'Device 2', type: 'power', data: [{ timestamp: '2023-01-01', value: 65 }] },
    { id: 3, name: 'Device 3', type: 'alarm', data: [{ value: 'active' }, { value: 'inactive' }] }
  ];
  res.json(devices);
});

https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app).listen(port, () => {
  console.log(`Server running on port ${port}`);
});
