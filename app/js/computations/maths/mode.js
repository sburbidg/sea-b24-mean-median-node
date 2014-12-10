'use strict';

var mode = function(numberArray) {
  //http://stackoverflow.com/questions/1063007/arr-sort-does-not-sort-integers-correctly
  function numSort(a, b) {
    return a - b;
  }
  var sorted = numberArray.sort(numSort);
  var curCount = 0;
  var curNum = sorted[0];
  var modeCount = 0;
  var curMode = 0;

  for (var i = 0; i < sorted.length; i++) {
    if (curNum == sorted[i]) {
      curCount += 1;
    } else {

      if (curCount > modeCount) {
        curMode = curNum;
        modeCount = curCount;
      }
      curCount = 0;
      curNum = sorted[i];
    }
  }
  return curMode;
};

module.exports = mode;
