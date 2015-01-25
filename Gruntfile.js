module.exports = function(grunt){

    grunt.initConfig({
	    pkg: grunt.file.readJSON('package.json'),
	    connect: {
		server: {
		    options: {},
		}
	    },
	    watch: {
            livereload:{
                options: {livereload:true},
                files:['views/**/**']
            },
            html: {
                files: ['views/*.html']
            },
            jade: {
                files: ['views/*.jade'],
                tasks:['jade']
            }
	    },
	    jade:{
              html:{
                  files:{
                      'views/':['views/index.jade']
                  }
              },
              options: {client:false}
        },
        nodemon:{
            script: 'app.js'
        }
    })
            




    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-jade');
    grunt.registerTask('default', ['nodemon','watch','jade']);
    grunt.registerTask('start', 'My start task description', function() {
      grunt.util.spawn({
        cmd: 'nodemon',
        args: ['app.js']
      });
      grunt.task.run('watch');
    });
    //grunt.registerTask('jade', ['jade'])
}