'use strict';

module.exports = function(app) {
  app.service('SplitServe', function() {
    this.splitter = function(a) {
      return a.split(' ');
    };
  });
};
