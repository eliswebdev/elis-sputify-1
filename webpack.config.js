const path = require('path');

module.exports = {
    mode: "development",
    entry: {
        main: "./jserver-sputify/src/js/index.js"
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
        })
      ],
}