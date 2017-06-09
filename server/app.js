const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('/api/hello', (req, res) => {
  res.json({ message: "hello" });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;
