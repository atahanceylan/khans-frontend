/Install express server
const express = require('express');
const app = express();

// Serve only the static files form the dist directory
//app.use(express.static(__dirname + '/dist'));
var path = require('path');


app.use(express.static(path.join(__dirname, 'public')));


// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
