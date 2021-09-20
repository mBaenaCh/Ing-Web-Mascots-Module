const { config } = require('dotenv');
const app = require('./app');
require('./database');

const PORT = 4000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));