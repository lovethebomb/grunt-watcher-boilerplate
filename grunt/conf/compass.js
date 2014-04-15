/* Compass - SASS Preprocessor options */
module.exports = {
    options: {
        relativeAssets: true
    },
    stylesheet: {
        options: {
            sassDir: '<%= path.scss %>',
            cssDir: '<%= path.css %>',
            noLineComments: true,
            outputStyle: 'compressed',
            environment: 'production'
        }
    },
};
