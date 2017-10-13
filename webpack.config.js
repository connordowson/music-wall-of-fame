var path = require('path');
var webpack = require('webpack');


module.exports = {

    entry: "./src/js/index.js",

    output: {

        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'

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

            // {

            //     test: /\.(png|jpeg|svg)$/,

            //     use: {

            //         loader: "url-loader",

            //         options: {

            //             name: "./assets/[name].[ext]",
            //             limit: 30000

            //         }

            //     }

            // }

            {
                test: /\.(gif|png|jpe?g)$/i,

                use: {

                    loader: "file-loader",

                    options: {

                        name: "./assets/[name].[ext]"

                    }
                }

            },

        ]
    },

    resolve: {

        modules: [
            path.resolve("./src/js"),
            path.resolve("./src"),
            "node_modules"
        ]

    }

}