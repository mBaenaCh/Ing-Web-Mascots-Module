const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    SERVER_PORT: process.env.PORT,
    MONGODB_URI: process.env.MONGODB_URI,
    SECURITY_MODULE: process.env.SECURITY_MODULE,
    OWNERS_MODULE: process.env.OWNERS_MODULE

}