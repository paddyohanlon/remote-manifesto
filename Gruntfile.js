module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        autoprefixer: {
            options: {
                browsers: ['last 2 version']
            },
            dist: {
                files: {
                    'css/build/autoprefixed/main.css': 'css/build/main.css'
                }
            }
        },

        cssmin: {
            combine: {
                files: {
                    'css/main.css': ['css/build/autoprefixed/main.css']
                }
            }
        },

        concat: {
            dist: {
                src: [
                    'js/main.js',
                    'js/plugins.js'
                ],
                dest: 'js/build/production.js',
            }
        },

        uglify: {
            build: {
                src: 'js/build/production.js',
                dest: 'js/build/production.min.js'
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'assets/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'assets/'
                }]
            }
        },

        watch: {
            styles: {
                files: ['css/build/*.css'],
                tasks: ['autoprefixer', 'cssmin']
            }
        }

    });

    // 3. Where we tell Grunt we plan to use these plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    

    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'autoprefixer', 'cssmin']);
    grunt.registerTask('dev', ['watch']);

};