const webpack = require('webpack')
module.exports = {
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
            }
        }),
        new HaCodePlugin()
    ]
};