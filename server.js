'use strict';

//used Karl Gentner's repo to help me figure out where my var weren't matching.

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/build'));
app.use(bodyParser.json());


app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('server is running like raptors');
});
