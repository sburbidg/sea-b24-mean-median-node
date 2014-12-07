'use strict';
module.exports = function(app) {
  app.controller('meanCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.meanCal = function() {
      var numberArray = $scope.numInput.split(' ');
      $http({
        method: 'POST',
        url: '/api/mean',
        data: {numList: numberArray}
      })
      .success(function(data) {
        $scope.mean = data.mean;
      })
      .error(function(data) {
        console.log(data);
      });
    };
  }]);
};
