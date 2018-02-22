/Install express server
const express = require('express');
const app = express();

// Serve only the static files form the dist directory
//app.use(express.static(__dirname + '/dist'));
var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
}

app.use(express.static('public', options))

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
