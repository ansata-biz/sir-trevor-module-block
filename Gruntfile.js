module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },

    coffee: {
      glob_to_multiple: {
        expand: true,
        flatten: true,
        cwd: 'src',
        src: ['*.coffee'],
        dest: 'src/',
        ext: '.js'
      }
    },

    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'build/sir-trevor-module-block.css': 'sass/sir-trevor-module-block.scss'
        }
      }
    },

    imageEmbed: {
      dist: {
        src: [ "build/sir-trevor-module-block.css" ],
        dest: "build/sir-trevor-module-block.css",
        options: {
          deleteAfterEncoding : false
        }
      }
    },

    watch: {
      scripts: {
        files: 'src/*.coffee',
        tasks: ['coffee'],
        options: {
          debounceDelay: 250
        }
      },
      css: {
        files: 'sass/*.scss',
        tasks: ['sass', 'imageEmbed'],
        options: {
          livereload: true
        }
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-image-embed');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};