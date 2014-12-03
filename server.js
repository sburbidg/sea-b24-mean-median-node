'use strict';

//used Karl Gentner's repo to help me figure out where my var weren't matching.

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var meanCal = require('./app/js/computations/maths/mean');

app.use(express.static(__dirname + '/build'));
app.use(bodyParser.json());

app.post('/api/mean', function(req, res) {
  var numArray = [];
  for(var i = 0; i < req.body.numList.length; i++) {
    numArray.push(Number(req.body.numList[i]));
  }
  var mean = meanCal(numArray);

  res.json({mean: mean});
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('server is running like raptors');
});
