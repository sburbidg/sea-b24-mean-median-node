'use strict';

module.exports = function(app) {
  app.controller('meanCtrl', function($scope, CalcServe) {
    $scope.doMean = function() {
      $scope.answer = CalcServe.mean($scope.numInput);
    };
  });
};
