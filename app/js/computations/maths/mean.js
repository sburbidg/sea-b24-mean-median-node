 'use strict';

var mean = function(numberArray) {
  var sum = 0;
  for (var i = 0; i < numberArray.length; i++) {
    sum += numberArray[i];
  }
  return (sum / numberArray.length);
};

module.exports = mean;
