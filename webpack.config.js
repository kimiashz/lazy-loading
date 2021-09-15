var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry : './app/index.jsx',
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/',
    },
    module : {
        rules : [
            {test : /\.(jsx)$/, use:'babel-loader'},
            {test : /\.sass$/, use:['style-loader','css-loader','sass-loader']}
        ]
    },
    mode:'development',
    devServer: {
        historyApiFallback: true,
    },
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'app/index.html'
        })
    ]
};