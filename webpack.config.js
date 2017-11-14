const webpack = require('webpack')
module.exports = {
    devtool: 'cheap-source-map',


    // configuration
    entry: "./src/index.js",
    output: {
        path: __dirname + "/public/dist/",
        filename: "index.bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js|jsx$/,
                include: [__dirname+ '/src'],
                loader: "babel-loader",
           }

        ]
    },
    plugins:[
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: true,
            mangle: true
        }),

    ]
};