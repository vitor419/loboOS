const mogoose = require('mongoose');

mogoose.connect('mongodb://localhost/users', { useNewUrlParse: true});
mogoose.Promise = global.Promise;

module.exports = mogoose;