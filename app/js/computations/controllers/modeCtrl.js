'use strict';

module.exports = function(app) {
  app.controller('modeCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.modeCal = function() {
      var numberArray = $scope.numInput.split(' ');
      $http({
        method: 'POST',
        url: '/api/mode',
        data: {numList: numberArray}
      })
      .success(function(data) {
        $scope.mode = data.mode;
      })
      .error(function(data) {
        console.log(data);
      });
    };
  }]);
};
