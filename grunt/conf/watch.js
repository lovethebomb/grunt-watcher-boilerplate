/* watch.js - File and folder watch */
module.exports = {
    scripts: {
        files: '<%= path.js_exclude %>',
        tasks: ['uglify:scripts']
    },

    scss: {
        files: [ '<%= path.scss %>' + '**.scss'],
        tasks: ['compass:stylesheet']
    }
};
