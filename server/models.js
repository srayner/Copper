var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/formula1');

// Mongoose models.
mongoose.model('drivers', {name: String});

module.exports = mongoose;