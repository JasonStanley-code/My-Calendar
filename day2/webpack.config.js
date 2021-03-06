const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    module : {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.md$/,
                use: ['frontmatter-markdown-loader']
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {} // produces {hash}.[ext] files by default
                  }
                ]
            },
            
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    
    entry : "./src/index.js",
    output : {
        filename : "[name].bundle.js",
        path : path.resolve(__dirname, "dist"),
        clean : true
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : path.resolve(__dirname, "public", "index.html"),
            title : "Wawancara ARC Day 2"
        }),
        new CopyWebpackPlugin({
            patterns : [
                {from : "src/assets", to : "assets"}
            ]
        })
    ],
    optimization: {
        splitChunks: { chunks: "all" }
    },
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        hot: true,
        historyApiFallback: true,
    },
    devtool: 'source-map'
    
    
    
}