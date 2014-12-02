'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var meanCal = require('./app/js/computations/maths/mean');

app.use(express.static(__dirname + '/build'));
app.use(bodyParser.json());

app.post('/api/mean', function(req, res) {
  var meanInput = [];
  for(var i = 0; i < req.body.input.length; i++) {
    meanInput.push(Number(req.body.input[i]));
  }
  var answer = meanCal(meanInput);

  res.json({answer: answer});
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('server is running like raptors');
});
