var path = require('path')
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        rules: [{
                test: /\.scss$/, 
                use: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: ['css-loader','sass-loader'],
                    publicPath: '/css'
                })
            },
            {
                test:/\.js$/,
                use:[
                    {
                        loader:'babel-loader'
                    }
                ]
            }
        
        ]
    },
	devServer: {
		contentBase: path.join(__dirname,''),
		inline: true
	},
    plugins: [
     new webpack.LoaderOptionsPlugin({
       debug: true
     }),
     new ExtractTextPlugin({
            filename: './css/style.css',
            disable: false, 
            allChunks: true
        })
    ]

};

/*
	DEV SERVER COMMAND
	command : webpack-dev-server --progress --colors
*/