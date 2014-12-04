'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.initConfig({
    jshint: {
      all: ['app/js/**/*.js'],
      options: {
        jshintrc: true
      }
    },

    jscs: {
      src: 'app/js/**/*.js',
      options: {
        config: '.jscsrc'
      }
    },

    simplemocha: {
      src: ['test/**/*.js']
    },

    copy: {
      dev: {
        cwd: 'app/',
        src: ['**/*.html'],
        expand: true,
        dest: 'build/'
      }
    },

    clean: {
      src:['build/']
    },

    browserify: {
      dev: {
        src: ['app/js/**/*.js'],
        dest: 'build/client_bundle.js',
        options: {
          transform:['debowerify']
        }
      }
    }
  });
  grunt.registerTask('test', ['jshint', 'jscs']);
  grunt.registerTask('build:dev', ['clean', 'copy:dev', 'browserify:dev', 'test']);
};
