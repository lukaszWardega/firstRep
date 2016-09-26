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
  				src: ['**/*.{png,jpg,gif}'],
  				dest: 'images/build/'
  			}]
  		}
  	},

		 watch: {
        scripts: {
            files: [{'./sass/*.sass': './css/*.css'}],
            tasks: ['sass'],
            options: {
                spawn: false,
            },
        } 
    }

 


  });
  // Load the plugins tasks 
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  
  grunt.registerTask('default', ['sass', 'imagemin']);
};