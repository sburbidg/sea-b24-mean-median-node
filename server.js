'use strict';

//used Karl Gentner's repo to help me figure out where my var weren't matching.

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var meanCal = require('./app/js/computations/maths/mean');
var medianCal = require('./app/js/computations/maths/median');
var modeCal = require('./app/js/computations/maths/mode');

app.use(express.static(__dirname + '/build'));
app.use(bodyParser.json());

app.post('/api/mean', function(req, res) {
  var numberArray = [];
  for(var i = 0; i < req.body.numList.length; i++) {
    numberArray.push(Number(req.body.numList[i]));
  }
  var mean = meanCal(numberArray);

  res.json({mean: mean});
});

app.post('/api/median', function(req, res) {
  var numberArray = [];
  for(var i = 0; i < req.body.numList.length; i++) {
    numberArray.push(req.body.numList[i]);
  }
  var median = medianCal(numberArray);

  res.json({median: median});
});

app.post('/api/mode', function(req, res) {
  var numberArray = [];
  for(var i = 0; i < req.body.numList.length; i++) {
    numberArray.push(Number(req.body.numList[i]));
  }
  var mode = modeCal(numberArray);

  res.json({mode: mode});
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('server is running like raptors');
});
