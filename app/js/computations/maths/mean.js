 'use strict';

var mean = function(numArray) {
  var sum = 0;
  for (var i = 0; i < numArray.length; i++) {
    sum += numArray[i];
  }
  return (sum / numArray.length);
};

module.exports = mean;
