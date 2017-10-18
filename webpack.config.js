var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');


module.exports = {

    entry: "./src/js/index.js",

    output: {

        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'

    },

    node: {
        fs: "empty"
      },

    module: {

        rules: [
            
            {

                test: /\.scss$/,

                use: [{

                    loader: "style-loader" // creates style nodes from JS strings
                },

                {
                    loader: "css-loader" // translates CSS into CommonJS
                },

                {
                    loader: "sass-loader" // compiles Sass to CSS
                }]

            },

            {

                test: /\.js$/,

                exclude: /(node_modules)/,

                use: {

                    loader: "babel-loader",

                    options: {

                        presets: ['es2015', 'react']
                        
                    }

                }

            },

            {
                test: /\.(gif|png|jpe?g)$/i,

                use: {

                    loader: "file-loader",

                    options: {

                        name: "./assets/[name].[ext]"

                    }
                }

            }

        ]
    },

    resolve: {

        modules: [
            path.resolve("./src/js"),
            path.resolve("./src"),
            "node_modules"
        ]

    },

    plugins: [

        new CopyWebpackPlugin([

            {from: "./src/assets/", to: "./assets/"}

        ])

    ]

};