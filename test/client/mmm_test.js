'use strict';

require('../../app/js/client');
require('angular-mocks');

describe('meanController', function(){
  var $controllerConstructor;
  var $httpBackend;
  var $scope;

  beforeEach(angular.mock.module('mmmApp'));

  beforeEach(angular.mock.inject(function($rootScope, $controller) {
    $scope = $rootScope.$new();
    $controllerConstructor = $controller;
  }));

  it('should be able to create controllers', function() {
    var meanController = $controllerConstructor('meanCtrl', {$scope: $scope});
    expect(typeof meanController).toBe('object');
  });

  describe('requests', function() {
    beforeEach(angular.mock.inject(function(_$httpBackend_) {
      $httpBackend = _$httpBackend_;
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should return 0 with no input', function() {
      $httpBackend.expectPOST('/api/mean').respond(200, {mean: 0});
      $controllerConstructor('meanCtrl', {$scope: $scope});
      $scope.numInput = '';
      $scope.meanCal();
      $httpBackend.flush();

      expect($scope.mean).toBe(0);
    });

    it('should return null with invalid input', function() {
      $httpBackend.expectPOST('/api/mean').respond(200, {mean: 'invalid'});
      $controllerConstructor('meanCtrl', {$scope: $scope});
      $scope.numInput = 'y 1 5 e';
      $scope.meanCal();
      $httpBackend.flush();

      expect($scope.mean).toBe('invalid');
    });

    it('should return mean', function() {
      $httpBackend.expectPOST('/api/mean').respond(200, {mean: 7});
      $controllerConstructor('meanCtrl', {$scope: $scope});
      $scope.numInput = '6 7 8';
      $scope.meanCal();
      $httpBackend.flush();

      expect($scope.mean).toBe(7);
    });
  });
});

describe('medianController', function(){
  var $controllerConstructor;
  var $httpBackend;
  var $scope;

  beforeEach(angular.mock.module('mmmApp'));

  beforeEach(angular.mock.inject(function($rootScope, $controller) {
    $scope = $rootScope.$new();
    $controllerConstructor = $controller;
  }));

  it('should be able to create controllers', function() {
    var medianController = $controllerConstructor('medianCtrl', {$scope: $scope});
    expect(typeof medianController).toBe('object');
  });

  describe('requests', function() {
    beforeEach(angular.mock.inject(function(_$httpBackend_) {
      $httpBackend = _$httpBackend_;
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should return 0 with no input', function() {
      $httpBackend.expectPOST('/api/median').respond(200, {median: 0});
      $controllerConstructor('medianCtrl', {$scope: $scope});
      $scope.numInput = '';
      $scope.medianCal();
      $httpBackend.flush();

      expect($scope.median).toBe(0);
    });

    it('should return null with invalid input', function() {
      $httpBackend.expectPOST('/api/median').respond(200, {median: 'invalid'});
      $controllerConstructor('medianCtrl', {$scope: $scope});
      $scope.numInput = 'y 1 5 e';
      $scope.medianCal();
      $httpBackend.flush();

      expect($scope.median).toBe('invalid');
    });

    it('should return median', function() {
      $httpBackend.expectPOST('/api/median').respond(200, {median: 8});
      $controllerConstructor('medianCtrl', {$scope: $scope});
      $scope.numInput = '6 7 8 9 0';
      $scope.medianCal();
      $httpBackend.flush();

      expect($scope.median).toBe(8);
    });
  });
});

describe('modeController', function(){
  var $controllerConstructor;
  var $httpBackend;
  var $scope;

  beforeEach(angular.mock.module('mmmApp'));

  beforeEach(angular.mock.inject(function($rootScope, $controller) {
    $scope = $rootScope.$new();
    $controllerConstructor = $controller;
  }));

  it('should be able to create controllers', function() {
    var modeController = $controllerConstructor('modeCtrl', {$scope: $scope});
    expect(typeof modeController).toBe('object');
  });

  describe('requests', function() {
    beforeEach(angular.mock.inject(function(_$httpBackend_) {
      $httpBackend = _$httpBackend_;
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should return 0 with no input', function() {
      $httpBackend.expectPOST('/api/mode').respond(200, {mode: 0});
      $controllerConstructor('modeCtrl', {$scope: $scope});
      $scope.numInput = '';
      $scope.modeCal();
      $httpBackend.flush();

      expect($scope.mode).toBe(0);
    });

    it('should return null with invalid input', function() {
      $httpBackend.expectPOST('/api/mode').respond(200, {mode: 'invalid'});
      $controllerConstructor('modeCtrl', {$scope: $scope});
      $scope.numInput = 'y 1 5 e';
      $scope.modeCal();
      $httpBackend.flush();

      expect($scope.mode).toBe('invalid');
    });

    it('should return mode', function() {
      $httpBackend.expectPOST('/api/mode').respond(200, {mode: 8});
      $controllerConstructor('modeCtrl', {$scope: $scope});
      $scope.numInput = '6 7 8 9 0';
      $scope.modeCal();
      $httpBackend.flush();

      expect($scope.mode).toBe(8);
    });
  });
});
