/*
 * Application : Copper
 * Decription  : An example Node Express application.
 * Author      : Steve Rayner
 */

// Create an Express application.
var express = require('express');
var app = express();

// Serve static files from public folder.
app.use(express.static('../public'));

// Add routes for dynamic content.
var routes = require('./routes');
routes.configRoutes(app);

// Start the server.
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});