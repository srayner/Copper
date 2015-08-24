var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/formula1');

// Mongoose models.
mongoose.model('drivers', {name: String});
mongoose.model('teams', {name: String});
mongoose.model('circuits', {name: String});

module.exports = mongoose;