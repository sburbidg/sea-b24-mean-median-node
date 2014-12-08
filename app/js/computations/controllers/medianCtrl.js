'use strict';

module.exports = function(app) {
  app.controller('medianCtrl', function($scope, CalcServe) {
    $scope.doMedian = function() {
      $scope.answer = CalcServe.median($scope.numInput);
    };
  });
};
