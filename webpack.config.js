const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './app/index.html',
    filename: 'index.html',
    inject: 'body'
});

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './app/index',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'dist'),
        inline: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                  }))
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader?name=/fonts/[name].[ext]']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader?name=/images/[name].[ext]']
              },
        ]
    },

    plugins: [
        HtmlWebpackPluginConfig,
        new ExtractTextPlugin({
            filename: 'stylesheets/[name].css',
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        })
    ]
}