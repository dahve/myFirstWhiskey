var express = require('express');
var bootstrap = require('bootstrap');

var app = express();

app.use(express.static(__dirname + '/app/views'));

app.get('/', function(req, res) {
    red.redirect('/index.html');
});

app.listen(3000, function() {
    console.log('myFirstWhiskey server running on port 3000');
});