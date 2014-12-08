'use strict';

require('angular/angular');

var mmmApp = angular.module('mmmApp', []);

require('./computations/services/splitServe.js')(mmmApp);
require('./computations/services/calcServe.js')(mmmApp);
require('./computations/controllers/meanCtrl.js')(mmmApp);
require('./computations/controllers/medianCtrl.js')(mmmApp);
require('./computations/controllers/modeCtrl.js')(mmmApp);
