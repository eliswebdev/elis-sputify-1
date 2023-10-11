const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        main: "./src/js/index.js"
    },
    module: {
        rules:[
            {
              test: /\.js$/i,
              use: ["babel-loader"],
            },
            {
              test: /\.s[ac]ss$/i,
              use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
          ],
    },
    output: {
        clean : true,
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
      },
      plugins: [
        new MiniCssExtractPlugin({
            filename: 'assets/scss/[name].css'
        }),
        ,
        new HtmlWebpackPlugin({
            template: './public/index.html',
            minify: true
        })
      ],
}