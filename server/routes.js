var mg = require('./models');

var configRoutes;

configRoutes = function(app) {

    app.get('/', function (req, res) {
        res.send('Hello World! This is the root path.');
    });
    
    app.get('/drivers', function (req, res) {
        mg.model('drivers').find(function(err, drivers) {
            res.send(drivers);
        }); 
    });
};

module.exports = { configRoutes : configRoutes };