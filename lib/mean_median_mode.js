'use strict'

var MeanMedianMode = function() {
  //your code here

  //start mean function

  this.mean = function(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++){
      sum += numbers[i];
    }
    return (sum / numbers.length);
  };

  //end mean

  //median

  this.median = function(numbers){
  var count = numbers.length;
  var halfLen = Math.floor(count/2);
    if(count % 2 === 0){

      var evMed = numbers.slice(halfLen - 1, halfLen + 1);
      var lowMed = evMed.pop();
      var highMed = evMed.pop();

      return (lowMed + highMed)/2;

    } else {

      var oddMed = numbers.slice(halfLen, halfLen + 1);

      return parseInt(oddMed);
    }
  };


  //end median

  //mode

  this.mode = function(numbers){
    //http://stackoverflow.com/questions/1063007/arr-sort-does-not-sort-integers-correctly
    function numSort(a, b){
      return a - b;
    }
    var sorted = numbers.sort(numSort);
    var curCount = 0;
    var curNum = sorted[0];
    var modeCount = 0;
    var curMode = 0;
    for (var i = 0; i < sorted.length; i++){
      if (curNum == sorted[i]){
        curCount += 1;
      } else {
        if(curCount > modeCount){
          curMode = curNum;
          modeCount = curCount;
        }
        curCount = 0;
        curNum = sorted[i];
      }
    }
    return curMode;
  };
};



var mmm = new MeanMedianMode();
module.exports = mmm;








