'use strict';

var median = function(numbers) {
  var count = numbers.length;
  var halfLen = Math.floor(count / 2);
  if (count % 2 === 0) {

    var evMed = numbers.slice(halfLen - 1, halfLen + 1);
    var lowMed = evMed.pop();
    var highMed = evMed.pop();

    return (lowMed + highMed) / 2;

  } else {
    var oddMed = numbers.slice(halfLen, halfLen + 1);

    return parseInt(oddMed);
  }
};

module.exports = median;
