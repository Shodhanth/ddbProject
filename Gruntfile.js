module.exports = function (grunt) {


	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		watch: {
			js: {
				file: ['app/*.js', 'server/*.js'],
				task: ['uglify']
			}
		},

		uglify: {
			options: {
				manage: false
			},
			my_target: {
				files: {
					'app/controller.min.js': ['app/controller.js'],
					'app/postController.min.js': ['app/postController.js'],
					'server/apiDel.min.js': ['server/apiDel.js'],
					'server/apiGet.min.js': ['server/apiGet.js'],
					'server/apiPost.min.js': ['server/apiPost.js']
				}
			}
		}


	});


	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', 'watch')
};