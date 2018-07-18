const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
            {
                test:/\.css$/,
                use:[
                    {
                        loader:'style-loader'
                    },
                    {
                        loader:'css-loader',
                        options:{
                            modules:true,
                            camelCase:true,
                            sourceMap:true
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'public/index.html',
            
        })
    ],
    devServer:{
        host:'localhost',
        port:port,
        historyApiFallback:true,
        open:true
    }
};