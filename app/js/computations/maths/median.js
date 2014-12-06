'use strict';

var median = function(numberArray) {
  var count = numberArray.length;
  var halfLen = Math.floor(count / 2);
  if (count % 2 === 0) {

    var evMed = numberArray.slice(halfLen - 1, halfLen + 1);
    var lowMed = evMed.pop();
    var highMed = evMed.pop();

    return (lowMed + highMed) / 2;

  } else {
    var oddMed = numberArray.slice(halfLen, halfLen + 1);

    return parseInt(oddMed);
  }
};

module.exports = median;
