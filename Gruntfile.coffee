module.exports = (grunt) ->
  grunt.initConfig(
    pkg: grunt.file.readJSON('package.json')
    browserSync:
      dev:
        bsFiles:
          src: ['*.html', '*.js', '*.css']
        options:
          server:
            baseDir: "./"
    sass:
      options:
        paths: ["./"]
      src:
        expand: true
        cwd: "./"
        src: "*.scss"
        dest: './'
        ext: ".css"
    watch: 
      scss:
        files: ['*.scss']
        tasks: ['newer:sass']
  )

  grunt.loadNpmTasks('grunt-browser-sync')
  grunt.loadNpmTasks('grunt-newer')
  grunt.loadNpmTasks('grunt-sass')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.registerTask('default', ['browserSync', 'watch'])
