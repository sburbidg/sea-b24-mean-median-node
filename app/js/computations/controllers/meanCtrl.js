'use strict';

module.exports = function(app) {
  app.controller('meanCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.meanCal = function () {
      var numArray = $scope.numInput.split(' ');
      $http({
        method: 'POST',
        url: '/api/mean',
        data: {numList: numArray}
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
