module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-jscs')
  grunt.initConfig({
    jshint: {
      all: ["lib/*.js"]
    },

    simplemocha: {
      src: ['test/**/*.js']
    },

    jscs: {
      all: {
        files: {
          src: ["lib/mean_median_mode.js"]
        },
        options: {
          "standards": "idiomatic"
        }
      }
    }
  });
  grunt.registerTask('test', ['jshint', 'simplemocha', 'jscs']);
  grunt.registerTask('default', ['test']);
};

