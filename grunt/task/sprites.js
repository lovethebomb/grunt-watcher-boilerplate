module.exports = function (grunt) {

    // or use grunt.registerMultiTask
    grunt.registerTask('sprites', ['glue', 'rename', 'compass']);
};
