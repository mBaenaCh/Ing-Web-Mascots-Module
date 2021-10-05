const BaseException = require('./baseException');

class EmptyFieldsException extends BaseException {
    constructor(message) {
        super(message, 400);
    }
}

module.exports = EmptyFieldsException;