var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
    context: path.join(__dirname, 'src/app'),
    devServer: {
        // This is required for older versions of webpack-dev-server
        // if you use absolute 'to' paths. The path should be an
        // absolute path to your build destination.
        outputPath: path.join(__dirname, 'angular2-dataGrid')
    },
    plugins: [
        new CopyWebpackPlugin([

            // Copy directory contents to {output}/to/directory/
            { from: 'src/app/angular2-dataGrid', to: 'angular2-dataGrid' },

        ], {
            ignore: [
                // Doesn't copy any files with a txt extension    
                '*.txt',

                // Doesn't copy any file, even if they start with a dot
                '**/*',

                // Doesn't copy any file, except if they start with a dot
                { glob: '**/*', dot: false }
            ],

            // By default, we only copy modified files during
            // a watch or webpack-dev-server build. Setting this
            // to `true` copies all files.
            copyUnmodified: true
        })
    ]
};