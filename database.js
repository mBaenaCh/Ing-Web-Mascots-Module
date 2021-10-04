const mongoose = require('mongoose');
const config = require('./config');

mongoose
  .connect(
    config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Db is connected'))
  .catch(error => console.log(error));