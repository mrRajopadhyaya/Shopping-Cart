const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');



const port = process.env.PORT || 3000;

module.exports = {
    //webpack configuration
    mode: 'development',
    entry:'./src/index.js',
    output:{
        filename:'bundle.[hash].js'
    },
    devtool:'inline-source-map',
    module:{
        rules:[
            //first rule
            {
                test:/\.(js)$/,
                exclude:/node_modules/,
                use:['babel-loader']
            },
            //second rule
            // {
            //     test:/\.css$/,
            //     use:[
            //         {
            //             loader:'style-loader'
            //         },
            //         {
            //             loader:'css-loader',
            //             options:{
            //                 modules:true,
            //                 camelCase:true,
            //                 sourceMap:true
            //             }
            //         },
                    
            //     ]
            // },
            //third rule
            {
                test: /\.scss$/,                    // made scss
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!sass-loader",
                })
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            filename:'./index.html'
        }),
        new ExtractTextPlugin('style.css')
        
    ],
    devServer:{
        host:'localhost',
        port:port,
        historyApiFallback:true,
        open:true
    }
};