const express = require('express');
const mascotRoutes = require('./src/routes/mascot.routes');

const app = express();

app.use(express.json());

app.use('/api/mascots', mascotRoutes);

module.exports = app;