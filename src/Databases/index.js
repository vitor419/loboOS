const mogoose = require('mongoose');

mogoose.connect('mongodb://18.230.57.59/users', { useNewUrlParse: true});
mogoose.Promise = global.Promise;

module.exports = mogoose;