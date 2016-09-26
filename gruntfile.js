module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
	sass: {
		dist: {
      		files: [{
        		expand: true,
        		cwd: 'sass',
        		src: ['*.sass'],
        		dest: 'css',
        		ext: '.css'
      }]
    }
  },

  imagemin: {
  		dynamic: {
  			files: [{
  				expand: true,
  				cwd: 'images/',
  				src: ['*.{png,jpg,gif}'],
  				dest: 'images/build/'
  			}]
  		}
  	},

	watch: {
          scripts: {
                files: './sass/*.sass',
                tasks: ['sass'],
            options: {
                spawn: false,
            },
        } 
    },
    browserSync: {
          dev: {
                bsFiles: {
                    src : [
                        './css/*.css',
                        './*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './'
                }
            }
        }

  });
  // Load the plugins tasks 
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  // Default task(s).
  
  grunt.registerTask('default', ['sass', 'imagemin', 'browserSync', 'watch']);
};