module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['public/assets/vendor/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'public/assets/css/app.css': 'public/assets/scss/app.scss'
        }
      }
    },

    compass: {
      dist: {
        options: {
          importPath: 'public/assets/vendor/foundation/scss',
          sassDir: 'public/assets/scss',
          cssDir: 'public/assets/css',
          environment: 'production',
          outputStyle: 'compressed'
        }
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'public/assets/scss/**/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['sass']);
  //grunt.registerTask('build', ['compass']);
  grunt.registerTask('default', ['build','watch']);
}