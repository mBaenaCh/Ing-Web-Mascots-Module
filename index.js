const config = require('./config');
const app = require('./app');
require('./database');

const PORT = config.SERVER_PORT || 4000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));