const mongoose = require('mongoose');

mongoose
  .connect(
      "mongodb://admin:admin@cluster0-shard-00-00.6dbjc.mongodb.net:27017,cluster0-shard-00-01.6dbjc.mongodb.net:27017,cluster0-shard-00-02.6dbjc.mongodb.net:27017/mascotsdb?ssl=true&replicaSet=atlas-7f1sro-shard-0&authSource=admin&retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Db is connected'))
  .catch(error => console.log(error));