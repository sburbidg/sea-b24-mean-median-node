'use strict';

module.exports = function(app) {
  app.controller('meanCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.meanCal = function () {
      var numbers = $scope.meanInput.split(' ');
      $http({
        method: 'POST',
        url: '/api/mean',
        data: {input: numbers}
      })
      .success(function(data){
        $scope.mean = data.mean;
      })
      .error(function(data) {
        console.log(data);
      });
    };
  }]);
};
