'use strict';

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'test/angular_testbundle.js'
    ],

    exclude: [
      '**/*.swp'
    ],

    preprocess: {

    },

    reporters: [
      'progress'
    ],

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autowatch: false,

    browsers: ['PhantomJS'],

    singleRun: true

  });
};
