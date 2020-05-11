var mongoose = require('mongoose');
var contact = new mongoose.Schema({ name: 'string', age: 'string' });
module.exports = mongoose.model('mg1', contact);