/* Uglify - Minify and js optiM */
module.exports = {
    options: {},
    scripts: {
        options: {
            sourceMap: true,
            banner: '/* build date - <%= grunt.template.today("yyyy-mm-dd") %> */'
        },
        files: [{
            expand: true,
            src: ['*.js', '!*.min.js'],
            dest: '<%= path.js_dist %>',
            cwd: '<%= path.js %>'
        }]
    },
};
