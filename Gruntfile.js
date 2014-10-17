module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			dist: {
				src: ['src/js/**/*.js'],
				dest: 'app/js/app.js'
			}
		},
		watch: {
			scripts: {
				files: ['src/js/**/*.js'],
				tasks: ['concat'],
				event: ['changed'],
				options: {
					spawn: false
				}
			}
		}
	});

	// Load the plugin that provides task(s).
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s).
	grunt.registerTask('default', ['watch']);

};