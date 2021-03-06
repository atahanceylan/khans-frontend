
const express = require('express');
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

var port = process.env.PORT || 5000;


// Serve only the static files form the dist directory
//app.use(express.static(__dirname + '/dist'));
var path = require('path');

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/src/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(port);
