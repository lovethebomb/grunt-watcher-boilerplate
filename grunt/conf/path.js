/* Directories path */
module.exports = {
    'app': './project/',
    'static': '<%= path.app %>' + 'static/',
    'css': '<%= path.static %>' + 'css/',
    'scss': '<%= path.static %>' + 'scss/',
    'js': '<%= path.static %>' + 'js/',
    'img': '<%= path.static %>' + 'img/',
    'js_dist': '<%= path.js %>' + 'dist/',
    'js_exclude': ['<%= path.js %>' + '**.js', '!<%= path.js %>' + '**.min.js', '!<%= path.js_dist %>'],
};
