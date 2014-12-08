'use strict';

module.exports = function(app) {
  app.service('CalcServe', function(SplitServe) {
    this.mean = function(a) {
      var sum = 0;
      for (var i = 0; i < SplitServe.splitter(a).length; i++) {
        sum += [i];
      }
      return (sum / SplitServe.splitter(a).length);
    };
    this.median = function(a) {
      var count = SplitServe.splitter(a).length;
      var halfLen = Math.floor(count / 2);
      if (count % 2 === 0) {

        var evMed = SplitServe.splitter(a).slice(halfLen - 1, halfLen + 1);
        var lowMed = evMed.pop();
        var highMed = evMed.pop();

        return (lowMed + highMed) / 2;

      } else {

        var oddMed = SplitServe.splitter(a).slice(halfLen, halfLen + 1);

        return parseInt(oddMed);
      }
    };
    this.mode = function(a) {
     //http://stackoverflow.com/questions/1063007/arr-sort-does-not-sort-integers-correctly
      function numSort(c, b) {
        return c - b;
      }
      var sorted = SplitServe.splitter(a).sort(numSort());
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
  });
};
