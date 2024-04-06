const path = require('path');

module.exports = {
    webpack: {
        configure: (webpackConfig, { env, paths }) => {
            // Change the output filename of the build
            webpackConfig.output.filename = 'static/js/main.js'; // Adjust the filename and path as needed
            return webpackConfig;
        },
    },
    paths: (paths, env) => {
        // Ensure that the build output directory is the same
        // No need to modify the build directory path here
        return paths;
    },
};
