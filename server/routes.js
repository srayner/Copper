var mg = require('./models');

var configRoutes;

configRoutes = function(app) {
    
    app.get('/drivers', function (req, res) {
        mg.model('drivers').find(function(err, drivers) {
            res.send(drivers);
        }); 
    });
    
    app.get('/teams', function (req, res) {
        mg.model('teams').find(function(err, drivers) {
            res.send(drivers);
        }); 
    });
    
    app.get('/circuits', function (req, res) {
        mg.model('circuits').find(function(err, drivers) {
            res.send(drivers);
        }); 
    });
    
};

module.exports = { configRoutes : configRoutes };