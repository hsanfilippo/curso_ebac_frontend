module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            }
        },
        uglify: {
            target: {
                files: {
                    'dist/scripts/main.min.js': 'src/scripts/main.js'
                }
            }
        }
    })

    grunt.registerTask('init', function() {
        const done = this.async();
        console.log('Grunt iniciado com sucesso! \n\nCompilar LESS: "npm run grunt compless" \n\nMinificar JS: "npm run grunt minjs" ');
        done();
    })

    grunt.registerTask('default', ['init']);
    grunt.registerTask('compless', ['less:development']);
    grunt.registerTask('minjs', ['uglify']);

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
}