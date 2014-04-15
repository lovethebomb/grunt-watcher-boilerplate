/* Gruntfile.js - Task runner for frontend and deployement */
module.exports = function (grunt) {
    // Grunt configuration and task folder
    var grunt_folder = './grunt/';

    // load all configuration files
    var configuration = require("require-grunt-configs")(grunt, grunt_folder + 'conf');
    grunt.initConfig(configuration);

    // load custom tasks
    grunt.loadTasks(grunt_folder + 'task');

    // load installed npm tasks
    require("load-grunt-tasks")(grunt);

    // Register the default tasks
    grunt.registerTask('default', ['watch']);
};
