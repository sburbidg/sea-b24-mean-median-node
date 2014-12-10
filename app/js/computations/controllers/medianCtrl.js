'use strict';

module.exports = function(app) {
  app.controller('medianCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.medianCal = function() {
      var numberArray = $scope.numInput.split(' ');
      $http({
        method: 'POST',
        url: '/api/median',
        data: {numList: numberArray}
      })
      .success(function(data) {
        $scope.median = data.median;
      })
      .error(function(data) {
        console.log(data);
      });
    };
  }]);
};
