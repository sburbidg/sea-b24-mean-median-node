'use strict';

require('angular/angular');

var mmmApp = angular.module('mmmApp', []);

require('./computations/controllers/meanCtrl.js')(mmmApp);
