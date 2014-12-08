'use strict';

module.exports = function(app) {
  app.controller('modeCtrl', function($scope, CalcServe) {
    $scope.doMode = function() {
      $scope.answer = CalcServe.mode($scope.numInput);
    };
  });
};
