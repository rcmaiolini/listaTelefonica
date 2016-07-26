module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      dist: {
        src: ['public/js/**/*.js']
      }
    },
    concat: {
      scripts: {
        src: [
          'public/js/**/*.js',
          'public/lib/**/*.js'
        ],
        dest: 'dist/js/scripts.js'
      },
      libs: {
        src: [
          'bower_components/angular/angular.min.js',
          'bower_components/angular-route/angular-route.min.js',
          'bower_components/angular-messages/angular-messages.min.js'
        ],
        dest: 'dist/js/libs.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['jshint', 'concat:scripts', 'concat:libs']);
};
