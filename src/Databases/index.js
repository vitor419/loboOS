const mogoose = require('mongoose');

mogoose.connect('mongodb://localhost:27017/login', { useNewUrlParse: true});
mogoose.Promise = global.Promise;

module.exports = mogoose;