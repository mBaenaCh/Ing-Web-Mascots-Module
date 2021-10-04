const express = require('express');
const mascotRoutes = require('./src/routes/mascot.routes');
const cors = require('cors');

const app = express();

app.use(cors())

app.use(express.json());

app.use('/api/mascots', mascotRoutes);

module.exports = app;