var express         = require('express'); // Express NPM
var app             = express();
var colors          = require('colors'); // command-line colors NPM
var validator       = require('validator'); // validators NPM
var cookie          = require('cookie'); // cookie NPM
var request         = require('request'); // request NPM
var prettyjson      = require('prettyjson'); // prettyjson NPM
var cookieParser    = require('cookie-parser');

app.use(cookieParser());

app.get('/', function (req, res) {
    res.cookie('name', 'tobi', { domain: 'localhost', path: '/', secure: false });
    console.log( req.hostname );
    res.send('Admin Homepage');
});



var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Server Starts!'.rainbow);
});


