// Catches uncaught exceptions and prevents app crashes
process.on('uncaughtException', (err) => {
  console.error(err.stack || err);
});

const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const helmet = require('helmet');

const app = express();

const apiRoutes = require('./routes/api_routes');

// DB Setup
mongoose.Promise = global.Promise;
if (process.env.NODE_ENV !== 'test') {
  const dbUrl = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/fullstack-web-boilerplate-db';
  mongoose.connect(dbUrl);
  const db = mongoose.connection;
  db.on('error', (err) => {
    console.error('Error', err);
    process.exit(1);
  });
  db.once('open', () => {
    console.log('Connected to MongoDB server.');
  });
}

// App Setup
// HTTP request logger with Standard Apache combined log output
app.use(morgan('combined'));
// Enable Cross Origin Resource Sharing
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
// Helmet is a collection of 11 smaller middleware functions
// that set HTTP headers to secure Express apps
app.use(helmet());
// Static files
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.use('/api', apiRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;
